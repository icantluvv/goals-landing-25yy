import Image from "next/image"

const Feature = ({ icon, title, text }: FeatureProps) => {
  return (
    <div className="flex-1 p-6 bg-white rounded-2xl border md:min-h-[200px] lg:min-w-[400px] xl:min-w-[300px] border-[#eaeaea] text-left flex flex-col items-center lg:items-start">
      <div className="flex items-center gap-[2px] mb-3">
        <Image
          src={icon}
          alt={title}
          className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
        />
        <h3 className="font-semibold md:text-[1rem]">{title}</h3>
      </div>
      <p className="text-[1rem] text-center lg:text-start md:max-w-[60vw] lg:max-w-auto text-gray-600">
        {text}
      </p>
    </div>
  )
}

export default Feature

type FeatureProps = {
  icon: string
  title: string
  text: string
}
