interface Props {
  type: Text
  placeholder: string
}

function ButtonLogin({ type, placeholder }: Props) {
  return (
    <button className={styles.Input} type={type}>
      {placeholder}
    </button>
  )
}

export default ButtonLogin