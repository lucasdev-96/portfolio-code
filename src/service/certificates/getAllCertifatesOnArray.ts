type data = {
  name: string;
  src: any;
};

export default function transformCertificatesToArray(): Array<data> {
  return [
    {
      name: 'Web Development',
      src: 'https://pdf.credential.net/tm6re34x_1648153324495.pdf'
    },
    {
      name: 'Computer Science',
      src: 'https://pdf.credential.net/cih6zsru_1648153498264.pdf'
    },
    { name: 'Back-End', src: 'https://pdf.credential.net/lfgg1t5j_1639119976751.pdf' },
    { name: 'Front-End', src: 'https://pdf.credential.net/iyilwu2b_1639075511609.pdf' },
    {
      name: 'Fundamentals',
      src: 'https://pdf.credential.net/v13vngpu_1647469942791.pdf'
    }
  ];
}
