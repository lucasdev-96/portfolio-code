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
      src: 'https://www.credential.net/1f8945a2-b933-4762-9c72-796ce359b009#gs.v1mkq3'
    },
    { name: 'Back-End', src: 'https://www.credential.net/b7a7f6b6-34e7-4c58-b409-43f87b403507' },
    { name: 'Front-End', src: 'https://www.credential.net/f9d66fe8-6ceb-4c77-9c2f-593990432393' },
    {
      name: 'Fundamentals',
      src: 'https://www.credential.net/b330728d-94b5-4573-b04c-723ec6f857d2'
    }
  ];
}
