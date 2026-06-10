import { StyleTitle } from './style.js'

export interface TitleProps {
  children: string;
}

export const Title = (text: TitleProps) => {
  return (
    <div>
      <StyleTitle>
        {text.children}
      </StyleTitle>
    </div>
  )
}
