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
    'We take worn-out hard courts and grounds and rebuild them as 3G training pitches. This one we built with the community, from the old surface to the first floodlit session.',
  // Owner asked (2026-10-28) to showcase this project as a job done "with the community".
  community: 'Built with the community',
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

// pos = CSS object-position focal point, so crops keep the subject in frame
type Media =
  | { kind: 'video'; src: string; poster: string; alt: string; pos?: string }
  | { kind: 'image'; src: string; sm: string; alt: string; w: number; h: number; pos?: string };

const v = (name: string, alt: string): Media => ({
  kind: 'video',
  src: `/media/video/${name}`,
  poster: `/media/video/${name}.jpg`,
  alt,
});
const i = (name: string, alt: string, w: number, h: number, pos?: string): Media => ({
  kind: 'image',
  src: `/media/img/${name}.jpg`,
  sm: `/media/img/${name}-sm.jpg`,
  alt,
  w,
  h,
  pos,
});

// The stages below are what the footage shows, in order.
// home = which item leads that stage on the homepage's five-stage section (default 0). Chosen so
// the homepage never repeats a photo already used in the slider or intro, and suits a landscape frame.
export const stages: { n: string; slug: string; title: string; text: string; home?: number; media: Media[] }[] = [
  {
    n: '01',
    slug: 'before',
    title: 'Before',
    text: 'The old hard court: tarmac, painted court lines and puddles after rain.',
    home: 2,
    media: [
      i('img05', 'The gates to the old wet tarmac court', 2048, 1536),
      i('still-before-wide', 'Wide drone shot of the fenced tarmac court on a frosty morning', 1664, 928),
      v('before-overhead', 'Drone view straight down on the forklift moving rolls across the old tarmac court'),
    ],
  },
  {
    n: '02',
    slug: 'shockpad',
    title: 'Shockpad',
    text: 'Shockpad rolled out over the old surface.',
    media: [
      i('still-shockpad', 'Drone view over the court with the shockpad going down', 1664, 928),
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
      i('still-turf-redhat', 'A young helper in a red hat beside a turf roll being pulled into place', 1664, 936),
      v('finished-reveal', 'Drone rising over the new turf as the last strips go down'),
      i('img04', 'Jointing tape laid along a turf seam', 1500, 2000),
      i('img03', 'Turf seams being glued on a misty morning', 1500, 2000),
    ],
  },
  {
    n: '04',
    slug: 'infill',
    title: 'Infill',
    text: 'Infill spread from bulk bags and brushed into the carpet.',
    home: 1,
    media: [
      i('img01', 'Volunteers, bulk bags of infill and wheelbarrows lined up inside the fence', 1500, 2000, '50% 45%'),
      i('img06', 'Crew brushing infill into the new turf', 1500, 2000, '50% 38%'),
      i('img02', 'Infill heaped on the turf ready to brush in', 1500, 2000),
    ],
  },
  {
    n: '05',
    slug: 'open',
    title: 'Open',
    text: 'Opened with the community: ribbon cut, first kick-off, then training under the floodlights.',
    media: [
      i('still-finished', 'Drone view of the finished 3G pitch next to the playground', 1664, 928),
      i('img13', 'Young players running onto the new pitch on opening day', 1600, 1200),
      i('img11', 'Blue ribbon across the gate on opening day', 900, 1600),
      i('img10', 'The pitch under floodlights at night', 2048, 1156),
      i('img12', 'Night training session under floodlights', 2048, 1156),
    ],
  },
];

export const surfaces = ['Tarmac / hard court', 'Grass', 'Old artificial turf', 'Something else'];

export const tel = (p: string) => 'tel:' + p.replace(/[^\d+]/g, '');
