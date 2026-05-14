export interface Equipment {
  id: string;
  name: string;
  category: string;
  icon: string;
  priority: 'essential' | 'recommended' | 'optional' | 'advanced';
  estimatedCost: string;
  description: string;
  benefits: string[];
  beginner_uses: string[];
  advanced_uses: string[];
  safety: string[];
  topExercises: string[];
  purchaseTips: string[];
}

export const equipmentList: Equipment[] = [
  {
    id: 'pull-up-bar',
    name: 'Pull-Up Bar',
    category: 'Bars',
    icon: '🔩',
    priority: 'essential',
    estimatedCost: '$20-$200 (doorframe to mounted)',
    description: 'The single most essential piece of calisthenics equipment. A pull-up bar enables the entire vertical pulling movement pattern, hanging work, dead hangs, muscle-ups, front lever, back lever, and all bar-based skills. No serious calisthenics practice is possible without one.',
    benefits: [
      'Enables the complete vertical pulling pattern',
      'Dead hanging decompresses spine and conditions tendons',
      'Foundation for muscle-ups, front lever, back lever, and more',
      'Inexpensive entry point for home training',
      'Enables L-sits and hanging core work'
    ],
    beginner_uses: [
      'Dead hangs for shoulder and spine health',
      'Scapular pull-ups',
      'Negative pull-ups (eccentrics)',
      'Australian rows (below bar)',
      'First pull-up progressions'
    ],
    advanced_uses: [
      'Weighted pull-ups with belt',
      'Muscle-up (kipping and strict)',
      'Front lever progressions',
      'Back lever progressions',
      'One-arm pull-up training',
      'Hanging L-sit and toes-to-bar'
    ],
    safety: [
      'Doorframe bars: check weight rating before trusting with full bodyweight',
      'Wall-mounted bars: use appropriate anchors for wall type',
      'Outdoor bars: check for rust and structural integrity regularly',
      'Never hang from bar without testing stability first'
    ],
    topExercises: ['Dead hang', 'Pull-up', 'Chin-up', 'Muscle-up', 'Front lever', 'Toes to bar', 'Hanging L-sit'],
    purchaseTips: [
      'Doorframe bars: good for beginners, weight limit 250-300lb typical',
      'Wall-mounted straight bar: best for long-term serious training',
      'Outdoor jungle gym bar: best height (7-8 feet ideal)',
      'For muscle-ups: you need at least 18 inches clearance above bar',
      'Grip width: should allow shoulder-width to slightly wider grip'
    ]
  },
  {
    id: 'gymnastic-rings',
    name: 'Gymnastic Rings',
    category: 'Rings',
    icon: '⭕',
    priority: 'recommended',
    estimatedCost: '$30-$80 (wooden preferred)',
    description: 'Gymnastic rings are the ultimate calisthenics tool. The instability of rings turns every exercise into a 3D stability challenge, producing far greater muscle activation and joint stability development than fixed implements. Ring training is the pinnacle of upper body development in calisthenics.',
    benefits: [
      'Unstable environment demands 3D stabilization — builds joints unlike any other tool',
      'Height adjustable — allows full range of progressions',
      'Ring muscle-up, iron cross, ring dip, and ring HSPU all require rings',
      'Ring support hold develops shoulder stability superior to any machine',
      'Portable — hang from any fixed overhead structure'
    ],
    beginner_uses: [
      'Ring row (adjustable difficulty by body angle)',
      'Ring push-up (hands in rings, feet on floor)',
      'Ring support hold',
      'Skin the cat (rings preferred over bar)',
      'Ring dip (build toward)'
    ],
    advanced_uses: [
      'Ring muscle-up',
      'Iron cross progressions',
      'Ring handstand',
      'Ring planche',
      'Ring front lever',
      'Ring L-sit and V-sit',
      'False grip work'
    ],
    safety: [
      'Wooden rings preferred — better grip feel and no slipping when dry',
      'Check carabiner and strap condition before every session',
      'Ensure overhead attachment point can support dynamic loading (3-4x bodyweight)',
      'Ring height: set so you can safely dismount at any point'
    ],
    topExercises: ['Ring muscle-up', 'Ring dip', 'Ring push-up', 'Iron cross', 'Skin the cat', 'False grip pull-up'],
    purchaseTips: [
      'Wood rings (birch or beech) are vastly preferred over plastic or metal',
      'Width: 28mm grip diameter is standard — most people prefer this',
      'Strap length: 4.5-5 meters minimum for full height adjustment range',
      'Look for: load-rated straps (>300kg), reliable buckle system',
      'Brand recommendation: Rogue, Again Faster, or similar quality brands for serious training'
    ]
  },
  {
    id: 'parallettes',
    name: 'Parallettes',
    category: 'Bars',
    icon: '🏋️',
    priority: 'recommended',
    estimatedCost: '$30-$150',
    description: 'Low parallel bars that allow push-ups, dips, L-sits, planche, and handstand practice at floor level. Parallettes allow for deeper range in pushing movements and reduce wrist extension demands compared to flat-hand floor work — critical for planche training.',
    benefits: [
      'Reduces wrist extension demand versus floor push-ups',
      'Allows greater range of motion in pushing movements (deficit position)',
      'Essential for L-sit, planche, and handstand work',
      'Neutral wrist position reduces pain risk in wrist-intensive skills',
      'Adds height for L-sit — allows full leg clearance from floor',
      'Allows straddle planche entry practice'
    ],
    beginner_uses: [
      'Push-ups with neutral wrist',
      'L-sit (height provides leg clearance)',
      'Planche lean practice',
      'Dips (if high enough)',
      'Handstand practice (with kick-up)'
    ],
    advanced_uses: [
      'Tuck to full planche progressions',
      'Handstand push-ups with full range',
      'L-sit to V-sit',
      'Planche push-ups',
      'One-arm push-up progressions',
      'Back lever on parallettes'
    ],
    safety: [
      'Ensure parallettes do not slide during use — rubber feet essential',
      'Check for structural stability before loading with full bodyweight',
      'Height: low (6-7 inches) for planche work, higher (12-15 inches) for dips',
      'Width: slightly wider than shoulder-width for comfortable hand position'
    ],
    topExercises: ['L-sit', 'Planche progressions', 'Handstand', 'Deficit push-up', 'V-sit'],
    purchaseTips: [
      'Low parallettes (6-8 inches): best for planche and floor-level skills',
      'High parallettes (14-18 inches): best for dips and more range in pushing',
      'Material: steel or wooden — steel is more durable, wood looks premium',
      'Homemade option: PVC pipe parallettes are functional and very cheap',
      'Width between bars: 15-20 inches is comfortable for most people'
    ]
  },
  {
    id: 'dip-bars',
    name: 'Dip Bars / Parallel Bars',
    category: 'Bars',
    icon: '⬆️',
    priority: 'recommended',
    estimatedCost: '$50-$300',
    description: 'Parallel bars at dip height (hip to waist level) for dips, L-sits, muscle-up transitions, and ring support practice. Essential for building the dip strength needed for muscle-ups and ring skills.',
    benefits: [
      'Primary tool for dip training — the fundamental vertical push',
      'Ring support hold can be practiced here',
      'L-sit with leg clearance',
      'Muscle-up landing practice',
      'More stable than rings for first dip learning'
    ],
    beginner_uses: [
      'Parallel bar dip learning',
      'L-sit introduction',
      'Support hold practice',
      'Muscle-up transition practice'
    ],
    advanced_uses: [
      'Weighted dips with belt',
      'Korean dips (behind the back dip)',
      'Advanced L-sit to V-sit',
      'Impossible dip (Hefesto) progressions'
    ],
    safety: [
      'Bar width: shoulder-width to slightly wider — too narrow causes elbow flare',
      'Check stability before weighted work',
      'Height: should allow full leg extension below for L-sits'
    ],
    topExercises: ['Parallel bar dip', 'L-sit', 'Weighted dip', 'Korean dip'],
    purchaseTips: [
      'Adjustable width bars preferred for finding ideal grip position',
      'Height: 40-42 inches is standard for most users',
      'Cap or grip on bars: reduces callus formation',
      'Outdoor parallel bars at parks work excellently'
    ]
  },
  {
    id: 'resistance-bands',
    name: 'Resistance Bands',
    category: 'Assistance & Resistance',
    icon: '🔴',
    priority: 'recommended',
    estimatedCost: '$20-$60 for a set',
    description: 'Rubber bands that attach to bars and rings to provide assistance or resistance. Essential for progressive loading in pull-ups, dips, planche, iron cross, and other movements where full bodyweight is too challenging.',
    benefits: [
      'Allows progressive loading in pull-ups and dips for beginners',
      'Iron cross progressions require band assistance over many months',
      'Planche progressions can use bands attached to rings',
      'Band pull-aparts and face pulls for shoulder prehab',
      'Mobility assistance (passive stretching)',
      'Resistance in extension for balance training'
    ],
    beginner_uses: [
      'Band-assisted pull-ups (reduces bodyweight)',
      'Band-assisted dips',
      'Band pull-aparts (shoulder prehab)',
      'Assisted mobility stretching'
    ],
    advanced_uses: [
      'Band-assisted iron cross',
      'Band-assisted planche progressions',
      'Added resistance push-ups',
      'Speed work against bands'
    ],
    safety: [
      'Check bands for nicks, cracks, and wear before every use',
      'Never wrap bands around parts of the body that could be struck if band breaks',
      'Beware of snap-back — bands store enormous energy when stretched'
    ],
    topExercises: ['Assisted pull-up', 'Assisted iron cross', 'Band pull-apart', 'Assisted dip'],
    purchaseTips: [
      'Buy a full set: thin, medium, heavy — different resistances for different purposes',
      'Loop bands (circular) vs flat bands — both have uses',
      'Latex vs fabric: latex provides more resistance range, fabric is more comfortable for mobility',
      'Check weight rating on each band'
    ]
  },
  {
    id: 'weighted-vest',
    name: 'Weighted Vest',
    category: 'Load Addition',
    icon: '⚖️',
    priority: 'optional',
    estimatedCost: '$50-$200',
    description: 'A vest with weight inserts worn during calisthenics to add resistance. The most convenient way to progressively overload when bodyweight movements become easy. Essential for intermediate to advanced athletes who have exceeded their bodyweight capacity.',
    benefits: [
      'Progressive overload for push-ups, pull-ups, dips, and squats',
      'Allows high-rep bodyweight movements to become strength challenges again',
      'Keeps hands free (unlike dip belt) for balance-intensive skills',
      'Can be used for L-sits, hollow body, and other holds',
      'Better weight distribution than dip belt for most movements'
    ],
    beginner_uses: ['Not recommended for beginners — master bodyweight first'],
    advanced_uses: [
      'Weighted push-up for absolute strength',
      'Weighted pull-up (vest vs belt — vest allows more movement freedom)',
      'Weighted dip',
      'Weighted hollow body',
      'Weighted L-sit'
    ],
    safety: [
      'Start with minimal weight — even 5% bodyweight changes exercises significantly',
      'Never use weighted vest for handstand training — fall risk',
      'Ensure vest does not restrict breathing or shoulder movement'
    ],
    topExercises: ['Weighted push-up', 'Weighted pull-up', 'Weighted dip', 'Weighted squat'],
    purchaseTips: [
      'Adjustable weight vests preferred — can add weight incrementally',
      'Rogue and XVest are quality options for serious training',
      'Weight capacity: 20-40lbs is sufficient for most intermediate athletes',
      'Fit: vest should sit close to body — no swinging during movement'
    ]
  },
  {
    id: 'dip-belt',
    name: 'Dip Belt / Weight Belt',
    category: 'Load Addition',
    icon: '🔗',
    priority: 'optional',
    estimatedCost: '$30-$80',
    description: 'A belt worn around the waist with a chain that allows hanging weight plates. The most efficient way to add weight to pull-ups and dips for pure strength development.',
    benefits: [
      'Most efficient weighted pull-up and dip tool',
      'Easy weight adjustment mid-session',
      'No chest restriction (unlike vest)',
      'Standard tool for strength-focused calisthenics athletes',
      'Chain allows exact weight adjustment'
    ],
    beginner_uses: ['Not needed — master 15+ pull-ups and 25+ dips first'],
    advanced_uses: ['Weighted pull-up', 'Weighted dip', 'Weighted chin-up'],
    safety: [
      'Ensure weight is secured — chain locking mechanism must be functional',
      'Do not use with swinging movements or kipping',
      'Start very light (5-10kg) even when you feel strong'
    ],
    topExercises: ['Weighted pull-up', 'Weighted dip', 'Weighted chin-up'],
    purchaseTips: [
      'Heavy-duty leather or nylon — nylon is more comfortable for most',
      'Chain length: long enough to add multiple plates',
      'Ring attachment: ensure ring is large enough for your plate hole diameter'
    ]
  },
  {
    id: 'chalk',
    name: 'Chalk (Magnesium Carbonate)',
    category: 'Grip',
    icon: '🏔️',
    priority: 'optional',
    estimatedCost: '$10-$20 for a block',
    description: 'Athletic chalk reduces moisture on hands, dramatically improving grip on bars and rings. A small investment that has a significant impact on pull-up, muscle-up, and ring training quality.',
    benefits: [
      'Increases grip security by 30-50% in high-rep sets',
      'Reduces skin tearing by reducing friction hot spots',
      'Essential for high-rep pull-ups and muscle-ups',
      'Critical for ring false grip work',
      'Psychological confidence in high-load situations'
    ],
    beginner_uses: ['Optional — not needed until grip limitation occurs'],
    advanced_uses: ['High-rep pull-ups', 'Muscle-up', 'Ring false grip', 'Toes to bar', 'One-arm hang'],
    safety: ['Liquid chalk preferred for indoor use — less mess than block chalk'],
    topExercises: ['All bar and ring movements when grip is limiting'],
    purchaseTips: [
      'Block chalk: messy but effective, best for outdoor or home gym',
      'Liquid chalk: cleaner, dries into same chalk coating, better for indoor gyms',
      'Small blocks work well — do not need large gymnastic block quantities'
    ]
  }
];
