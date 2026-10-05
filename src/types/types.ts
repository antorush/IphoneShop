export type THeader = {
  id: string | number;
  name: string;
};

export type FooterLink = {
  id: number;
  title: string;
  href: string; // Предполагаем, что ссылки будут вести на какие-то страницы
};

// Определяем интерфейс для целой колонки (секции)
export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type TSocial = {
  id: string | number;
  icon: string;
  name?: string;
};


export type TCategory={
  id:string|number,
  icon:string,
  name:string,
  href:string,
}