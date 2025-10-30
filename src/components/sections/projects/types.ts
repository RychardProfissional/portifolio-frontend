export interface IProjectNavProps {
  name: string;
  onClick: () => void;
  active: boolean;
}

export interface IProjectCardProps {
  id: string;
  src: string;
  name: string;
  description: string;
  delay: number;
}