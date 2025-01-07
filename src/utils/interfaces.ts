import type { IconType } from 'react-icons';
export interface MessageInterface {
  name: string;
  message: string;
  me: boolean;
  date?: string;
}

export interface MembersInterface {
  id: number;
  name: string;
  image: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ComponentType<{ className?: string }>;
  subfixIcon?: React.ComponentType<{ className?: string }>;
  onClickIcon?: () => void;
  className?: string;
  showPassword?: boolean;
}