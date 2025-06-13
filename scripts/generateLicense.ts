import * as mammoth from "mammoth"
import * as fs from "fs"
import * as path from "path"

interface LicenseSection {
  title: string
  content: string[]
}

export async function extractAndParseLicense(): Promise<LicenseSection[]> {
  const filePath = path.join(process.cwd(), "scripts/goals_license.docx")
  const buffer = fs.readFileSync(filePath)

  const { value: rawText } = await mammoth.extractRawText({ buffer })

  // Разобьем весь текст на строки
  const lines = rawText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  const sections: LicenseSection[] = []
  let currentSection: LicenseSection | null = null

  // Функция проверки, что строка — заголовок
  const isTitle = (line: string) => {
    // Заголовок — строка в верхнем регистре, не слишком длинная
    const isUpperCase = line === line.toUpperCase()
    const isNotLong = line.length > 0 && line.length < 100
    return isUpperCase && isNotLong
  }

  for (const line of lines) {
    if (isTitle(line)) {
      // Начинаем новую секцию
      if (currentSection) {
        sections.push(currentSection)
      }
      currentSection = { title: line, content: [] }
    } else {
      // Это обычный текст, добавляем в текущую секцию
      if (!currentSection) {
        // Если секции еще нет, создаём "без заголовка"
        currentSection = { title: "Без заголовка", content: [] }
      }
      currentSection.content.push(line)
    }
  }

  // Добавляем последнюю секцию, если есть
  if (currentSection) {
    sections.push(currentSection)
  }

  return sections
}
