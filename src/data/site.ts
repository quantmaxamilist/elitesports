// Elite Sports Surfaces — single source of truth.
//
// There is no previous website. Everything here comes from (a) the owner's brief relayed on
// 2026-10-16 ("revamping grounds into 3G training pitches", wants before/after photos and videos)
// and (b) plain descriptions of what the supplied footage shows. Nothing is invented: no stats,
// testimonials, clients, years or locations. Fields marked TBC must be supplied by the owner.

export const site = {
  name: 'Elite Sports Surfaces',
  short: 'Elite',
  what: '3G training pitches',
  // From the owner's brief. Draft headline — owner to approve the wording.
  headline: 'Tired grounds, turned into 3G training pitches.',
  intro:
    'We take worn-out hard courts and grounds and rebuild them as 3G training pitches. Here is one of them, from the old surface to the first floodlit session.',
  phone: '', // TBC
  email: '', // TBC
  area: '', // TBC — area covered / address
  social: [] as { label: string; href: string }[], // TBC
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Our work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

type Media =
  | { kind: 'video'; src: string; poster: string; alt: string }
  | { kind: 'image'; src: string; sm: string; alt: string; w: number; h: number };

const v = (name: string, alt: string): Media => ({
  kind: 'video',
  src: `/media/video/${name}`,
  poster: `/media/video/${name}.jpg`,
  alt,
});
const i = (name: string, alt: string, w: number, h: number): Media => ({
  kind: 'image',
  src: `/media/img/${name}.jpg`,
  sm: `/media/img/${name}-sm.jpg`,
  alt,
  w,
  h,
});

// The stages below are what the footage shows, in order.
export const stages: { n: string; slug: string; title: string; text: string; media: Media[] }[] = [
  {
    n: '01',
    slug: 'before',
    title: 'Before',
    text: 'The old hard court: tarmac, painted court lines and puddles after rain.',
    media: [
      v('before-overhead', 'Drone view straight down on the old tarmac court with painted lines'),
      v('before-wide', 'Wide drone shot of the fenced tarmac court on a frosty morning'),
      i('img05', 'The old wet tarmac court seen through the gate', 2048, 1536),
    ],
  },
  {
    n: '02',
    slug: 'shockpad',
    title: 'Shockpad',
    text: 'Shockpad rolled out over the old surface.',
    media: [
      v('turf-rolls', 'Shockpad rolls laid across the court beside the forklift'),
      v('shockpad-aerial', 'Drone orbit over the court with the shockpad going down'),
      i('img08', 'High drone view of the site mid-install with shockpad and turf', 2048, 1156),
    ],
  },
  {
    n: '03',
    slug: 'turf',
    title: '3G turf',
    text: 'The 3G carpet unrolled, lined up and joined.',
    media: [
      v('turf-overhead', 'Overhead drone view of the first turf rolls going down over the shockpad'),
      v('turf-half', 'Half the pitch in turf, half still shockpad'),
      v('turf-ground', 'Crew pulling a turf roll into place'),
      v('finished-reveal', 'Drone rising over the new turf as the last strips go down'),
      i('img07', 'Drone view of the court half covered in new turf', 2048, 1156),
      i('img04', 'Jointing tape laid along a turf seam', 1500, 2000),
      i('img03', 'Turf seams being glued on a misty morning', 1500, 2000),
    ],
  },
  {
    n: '04',
    slug: 'infill',
    title: 'Infill',
    text: 'Infill spread from bulk bags and brushed into the carpet.',
    media: [
      i('img01', 'Bulk bags of infill and wheelbarrows lined up inside the fence', 1500, 2000),
      i('img06', 'Crew brushing infill into the new turf', 1500, 2000),
      i('img02', 'Infill heaped on the turf ready to brush in', 1500, 2000),
    ],
  },
  {
    n: '05',
    slug: 'open',
    title: 'Open',
    text: 'Ribbon cut, first kick-off, then training under the floodlights.',
    media: [
      v('finished-pingpong', 'Slow drone view of the finished 3G pitch next to the playground'),
      i('img13', 'Young players running onto the new pitch on opening day', 1600, 1200),
      i('img11', 'Blue ribbon across the gate on opening day', 900, 1600),
      i('img10', 'The pitch under floodlights at night', 2048, 1156),
      i('img12', 'Night training session under floodlights', 2048, 1156),
    ],
  },
];

export const surfaces = ['Tarmac / hard court', 'Grass', 'Old artificial turf', 'Something else'];

export const tel = (p: string) => 'tel:' + p.replace(/[^\d+]/g, '');
