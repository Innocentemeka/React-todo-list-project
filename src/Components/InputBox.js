const InputBox = ({ placeholder, value, onChange }) => {
  return (
    <input onChange={onChange} type="text" placeholder={placeholder} value={value} className='InputBox' />
  )
}

export default InputBox;