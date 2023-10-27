import { css } from '@linaria/core'

const styles = css`
  color: red;
`

export default function Home() {
  return (
    <div>
      <p className={styles}>test</p>
    </div>
  )
}
