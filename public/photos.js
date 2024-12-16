const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];



const photos = [
  { src: '/alexislovelyfreya.jpeg', width: 1080, height: 1000, alt: 'Bild 1' },
  { src: '/IMG_3120.jpeg', width: 1080, height: 1000, alt: 'Bild 2' },
  { src: '/IMG_4086.jpeg', width: 1080, height: 1000, alt: 'Bild 3' },
  { src: '/pappar.JPG', width: 1080, height: 1000, alt: 'Bild 4' },
  { src: '/farfar.png', width: 1080, height: 800, alt: 'Bild 5' },
  { src: '/dance.png', width: 1080, height: 800, alt: 'Bild 6' },
  { src: '/festiv.jpeg', width: 1080, height: 800, alt: 'Bild 7' },
  { src: '/freya.jpeg', width: 1080, height: 800, alt: 'Bild 8' },
  { src: '/IMG_5311.jpeg', width: 1080, height: 800, alt: 'Bild 9' },
  { src: '/IMG_0031.jpeg', width: 1080, height: 800, alt: 'Bild 10' },
  { src: '/IMG_0044.jpeg', width: 1080, height: 800, alt: 'Bild 11' },
  { src: '/IMG_0060.jpeg', width: 1080, height: 800, alt: 'Bild 12' },
  { src: '/IMG_0099.jpeg', width: 1080, height: 800, alt: 'Bild 13' },
  { src: '/IMG_0124.jpeg', width: 1080, height: 800, alt: 'Bild 14' },
  { src: '/IMG_0128.jpeg', width: 1080, height: 800, alt: 'Bild 15' },
  { src: '/IMG_0148.JPG', width: 1080, height: 800, alt: 'Bild 16' },
  { src: '/IMG_0212.jpeg', width: 1080, height: 800, alt: 'Bild 17' },
  { src: '/IMG_0339.jpeg', width: 1080, height: 800, alt: 'Bild 18' },
  { src: '/IMG_0376.jpeg', width: 1080, height: 800, alt: 'Bild 19' },
  { src: '/IMG_0436.JPG', width: 1080, height: 800, alt: 'Bild 20' },
  { src: '/IMG_0448.jpeg', width: 1080, height: 800, alt: 'Bild 21' },
  { src: '/IMG_0478.JPG', width: 1080, height: 800, alt: 'Bild 22' },
  { src: '/IMG_0540.jpeg', width: 1080, height: 800, alt: 'Bild 23' },
  { src: '/IMG_0602.jpeg', width: 1080, height: 800, alt: 'Bild 24' },
  { src: '/IMG_0622.jpeg', width: 1080, height: 800, alt: 'Bild 25' },
  { src: '/IMG_0644.JPG', width: 1080, height: 800, alt: 'Bild 26' },
  { src: '/IMG_0659.JPG', width: 1080, height: 800, alt: 'Bild 27' },
  { src: '/IMG_0668.jpeg', width: 1080, height: 800, alt: 'Bild 28' },
  { src: '/freyaragnar.JPG', width: 1080, height: 800, alt: 'Bild 29' },
  { src: '/IMG_0734.JPG', width: 1080, height: 800, alt: 'Bild 30' },
  { src: '/IMG_0738.JPG', width: 1080, height: 800, alt: 'Bild 31' },
  { src: '/IMG_0881.JPG', width: 1080, height: 800, alt: 'Bild 32' },
  { src: '/IMG_0883.JPG', width: 1080, height: 800, alt: 'Bild 33' },
  { src: '/IMG_0913.JPG', width: 1080, height: 800, alt: 'Bild 34' },
  { src: '/IMG_0956.JPG', width: 1080, height: 800, alt: 'Bild 35' },
  { src: '/IMG_0980.JPG', width: 1080, height: 800, alt: 'Bild 36' },
  { src: '/IMG_1133.PNG', width: 1080, height: 800, alt: 'Bild 37' },
  { src: '/IMG_5312.jpeg', width: 1080, height: 800, alt: 'Bild 38' },
  { src: '/IMG_1158.JPG', width: 1080, height: 800, alt: 'Bild 39' },
  { src: '/IMG_1164.JPG', width: 1080, height: 800, alt: 'Bild 40' },
  { src: '/IMG_1180.JPG', width: 1080, height: 800, alt: 'Bild 41' },
  { src: '/IMG_1916.JPG', width: 1080, height: 800, alt: 'Bild 42' },
  { src: '/IMG_1923.JPG', width: 1080, height: 800, alt: 'Bild 43' },
  { src: '/IMG_1957.JPG', width: 1080, height: 800, alt: 'Bild 44' },
  { src: '/IMG_1997.JPG', width: 1080, height: 800, alt: 'Bild 45' },
  { src: '/IMG_2009.JPG', width: 1080, height: 800, alt: 'Bild 46' },
  { src: '/IMG_2065.JPG', width: 1080, height: 800, alt: 'Bild 47' },
  { src: '/IMG_2082.JPG', width: 1080, height: 800, alt: 'Bild 48' },
  { src: '/IMG_2140.JPG', width: 1080, height: 800, alt: 'Bild 49' },
  { src: '/IMG_2319.JPG', width: 1080, height: 800, alt: 'Bild 50' },
  { src: '/IMG_2334.JPG', width: 1080, height: 800, alt: 'Bild 51' },
  { src: '/IMG_2367.jpeg', width: 1080, height: 800, alt: 'Bild 52' },
  { src: '/IMG_2368.jpeg', width: 1080, height: 800, alt: 'Bild 53' },
  { src: '/IMG_2425.jpeg', width: 1080, height: 800, alt: 'Bild 54' },
  { src: '/IMG_2514.JPG', width: 1080, height: 800, alt: 'Bild 55' },
  { src: '/IMG_2559.JPG', width: 1080, height: 800, alt: 'Bild 56' },
  { src: '/IMG_2640.JPG', width: 1080, height: 800, alt: 'Bild 57' },
  { src: '/IMG_2677.JPG', width: 1080, height: 800, alt: 'Bild 58' },
  { src: '/IMG_2679.JPG', width: 1080, height: 800, alt: 'Bild 59' },
  { src: '/IMG_2707.JPG', width: 1080, height: 800, alt: 'Bild 60' },
  { src: '/IMG_2723.JPG', width: 1080, height: 800, alt: 'Bild 61' },
  { src: '/IMG_2728.JPG', width: 1080, height: 800, alt: 'Bild 62' },
  { src: '/IMG_2800.JPG', width: 1080, height: 800, alt: 'Bild 63' },
  { src: '/IMG_2823.JPG', width: 1080, height: 800, alt: 'Bild 64' },
  { src: '/IMG_2983.jpeg', width: 1080, height: 800, alt: 'Bild 65' },
  { src: '/IMG_3029.jpeg', width: 1080, height: 800, alt: 'Bild 66' },
  { src: '/IMG_3283.jpeg', width: 1080, height: 800, alt: 'Bild 68' },
  { src: '/IMG_6365.jpeg', width: 1080, height: 800, alt: 'Bild 69' },
  { src: '/IMG_6381.jpeg', width: 1080, height: 800, alt: 'Bild 70' },
  {
    src: '/1C353144-767B-49AB-B98A-9F97C0EDA126.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 71',
  },
  {
    src: '/6BF1C120-3085-46C9-9038-07FBD667655A_1_105_c.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 72',
  },
  {
    src: '/36C8F745-A08E-4A3A-B60E-D7DC55704C71_4_5005_c.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 73',
  },
  {
    src: '/89B8C3FF-0C1C-4FFB-B484-A7144790CC71.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 74',
  },
  {
    src: '/82433700-C3E0-4B5D-8DC2-FE5CA0CE085D.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 75',
  },
  {
    src: '/BC0A67AB-292B-4938-A8ED-721E76E4041B_4_5005_c.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 76',
  },
  {
    src: '/C00A2687-6642-4404-93A2-9700731C6038.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 77',
  },
  {
    src: '/E81013CB-1DF2-49CB-8950-AC24E689B16A.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 78',
  },
  {
    src: '/F5D4DF08-70B8-438E-B472-DCF755822C43.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 79',
  },
  {
    src: '/IMG_5386.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 80',
  },
  {
    src: '/F5D4DF08-70B8-438E-B472-DCF755822C43.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 81',
  },
  {
    src: '/1.JPG',
    width: 1080,
    height: 800,
    alt: 'Bild 82',
  },

  {
    src: '/2.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 83',
  },

  {
    src: '/3.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 84',
  },

  {
    src: '/4.jpeg',
    width: 1080,
    height: 800,
    alt: 'Bild 85',
  },

  {
    src: '/5.JPG',
    width: 1080,
    height: 800,
    alt: 'Bild 86',
  },
];

export default photos;
