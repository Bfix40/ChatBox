interface Props {
  boxShadow?: boolean
}

const IconMenu = ({ boxShadow = true }: Props): JSX.Element => {
  return (
    <svg data-svg-bx={boxShadow} xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'>
      <path d='M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z' />
    </svg>
  )
}

export { IconMenu }
