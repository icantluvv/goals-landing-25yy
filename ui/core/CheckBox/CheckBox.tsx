type CheckBoxProps = {
  checked: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="w-[20px] h-[20px] cursor-pointer"
      checked={checked}
      onChange={onChange}
    />
  )
}

export default CheckBox