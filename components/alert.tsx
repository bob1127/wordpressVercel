import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert() {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': '',
        'bg-accent-1 border-accent-2': '',
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
            <p className={'text-base'}>フェスが行われる各会場内や周辺施設、周辺エリアのビームスなどで、都市ごとに趣向をこらしたオリジナルのイベ🍌</p>
        </div>
      </Container>
    </div>
  )
}
