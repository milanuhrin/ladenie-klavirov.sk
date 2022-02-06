import {
   faAddressCard,
   faClipboard,
   faPhone,
   faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'

export const hero2Items = [
   'Hudobné školy',
   'Profesionálni hudobníci',
   'Rekreační amatéri',
   'Oprava mechaniky',
]

export const hero2ImageLayouts = [
   {
      alt: 'Pohľad z blízka na klavíristku',
      class: ' object-contain col-span-6 w-[100%]   self-end ',
   },
   {
      alt: 'Luxusný klavír',
      class: ' w-[80%]    self-end col-span-6 ',
   },
   {
      alt: 'Muž hrá vonku na klavíri',
      class: ' w-[75%] justify-self-end  col-span-5',
   },
   {
      alt: 'Žena a dieťa hrajú na klavíri',
      class: 'w-[90%]   col-span-6',
   },
]

export const menuItems = [
   {
      name: 'Skúsenosti',
      link: '#experience',
      icon: faClipboard,
   },
   {
      name: 'O mne',
      link: '#aboutMe',
      icon: faAddressCard,
   },
   {
      name: 'Kontakt',
      link: '#contact',
      icon: faPhone,
   },
   {
      name: 'Vzdelanie',
      link: '#education',
      icon: faUserGraduate,
   },
]
