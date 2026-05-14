export interface RoadmapPhase {
  id: string;
  phase: number;
  title: string;
  subtitle: string;
  duration: string;
  level: 'foundation' | 'beginner' | 'intermediate' | 'advanced' | 'elite';
  color: string;
  description: string;
  goals: string[];
  keyMovements: string[];
  dailyPractice: string[];
  weeklyStructure: string[];
  masteryRequirements: string[];
  mobilityFocus: string[];
  phrehab: string[];
  milestones: string[];
  unlocks: string;
  commonPitfalls: string[];
  scienceNotes: string;
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'phase-0',
    phase: 0,
    title: 'Phase 0: JOINT PREPARATION',
    subtitle: 'The Foundation You Cannot Skip',
    duration: '2-4 weeks ',
    level: 'foundation',
    color: 'from-slate-500 to-slate-700',
    description: 'Joint warm-up is essential before calisthenics. Mobilize wrists, shoulders, scapula, and hips to prevent injury. Skipping it increases injury risk.',
    goals: [
      'Develop baseline wrist extension to 70-80 degrees',
      'Establish scapular motor control and awareness',
      'Build shoulder overhead mobility to full 180 degrees',
      'Create hip mobility adequate for full squats',
      'Condition tendons and ligaments for upcoming load'
    ],
    keyMovements: [
      'Wrist CARs (Controlled Articular Rotations)',
      'Scapular circles and isolated protraction/retraction',
      'Shoulder CARs — full arm rotation',
      'Thoracic extension over foam roll',
      'Hip CARs',
      'Ankle dorsiflexion drill',
      'Dead hang (passive) — 20-30 second holds',
      'Cat-camel for spinal wave',
      'Child pose and cobra for spinal mobility'
    ],
    dailyPractice: [
      'Morning: 10-minute joint mobilization circuit',
      'Wrist CARs — 5 full circles each direction, both hands',
      'Shoulder CARs — 5 full circles each direction, both arms',
      'Hip CARs — 5 full circles each direction, both hips',
      'Passive dead hang — 2 x 30 seconds',
      'Cat-camel — 10 slow reps',
      'Thoracic extension over foam roll — 60 seconds',
      'Deep squat hold — 60 seconds'
    ],
    weeklyStructure: [
      'Every day: 10-15 minutes joint mobilization',
      'Every day: passive dead hangs (build to 60 seconds)',
      'Every other day: light movement practice — wall push-ups, bodyweight squats',
      'Daily: wrist extension stretch — 30 seconds x 3 positions'
    ],
    masteryRequirements: [
      'Passive dead hang 60 seconds without discomfort',
      'Full overhead arm reach without shrugging or ribcage flaring',
      'Full squat hold for 60 seconds with heels flat',
      'Wrist extension to 70 degrees without pain',
      'Scapular protraction and retraction visible movement (not just shoulder shrug)'
    ],
    mobilityFocus: [
      'WRIST EXTENSION: Critical for push-ups, planche, handstand. Most people enter calisthenics with only 40-50 degrees. Build to 80+ degrees.',
      'SHOULDER OVERHEAD: Must achieve 180 degrees without ribcage elevation or lumbar arch compensation.',
      'THORACIC EXTENSION: Kyphotic posture limits overhead reach and handstand alignment.',
      'HIP FLEXION AND EXTENSION: Required for deep squat and bridge positions.',
      'ANKLE DORSIFLEXION: At least 15-20 degrees required for proper squat mechanics.'
    ],
    phrehab: [
      'Wrist conditioning — loading through full range before heavy work',
      'Rotator cuff activation — band external rotation exercises',
      'Lower trapezius activation — prone Y-T-W exercises',
      'Glute activation — clam shells and hip thrusts',
      'Serratus activation — push-up plus from knee or wall'
    ],
    milestones: [
      'Week 1: Daily mobility practice established as habit',
      'Week 2: Dead hang 45 seconds achieved',
      'Week 3: Full squat hold 60 seconds with good position',
      'Week 4: Overhead reach full range without compensation',
      'Ongoing: Wrist mobility progressively improving'
    ],
    unlocks: 'Phase 1 — Foundational Strength',
    commonPitfalls: [
      'Skipping this phase entirely (most common mistake)',
      'Moving to Phase 1 with insufficient wrist mobility — leads to wrist pain that stops training',
      'Treating mobility as warming up for real training instead of as the training itself',
      'Not dead hanging daily — tendons take 8-12 weeks to adapt to load',
      'Foam rolling only — foam rolling is tissue quality, not mobility (CARs build mobility)'
    ],
    scienceNotes: 'Tendons and ligaments adapt to load 3-4x slower than muscle tissue due to lower vascularity and slower collagen turnover. Research by Dr. Keith Barr shows tendons require 8-12 weeks of consistent loading to meaningfully increase collagen density. Joint mobility requires daily practice because the nervous system limits ROM protectively — consistently moving through full range teaches the nervous system the range is safe and gradually removes the protective restriction.'
  },
  {
    id: 'phase-1',
    phase: 1,
    title: 'Phase 1: FOUNDATIONAL STRENGTH',
    subtitle: 'Mastering the Fundamental Patterns',
    duration: '8-16 weeks',
    level: 'beginner',
    color: 'from-green-500 to-emerald-700',
    description: 'Foundation phase is key in calisthenics. Focus on push, pull, core, and legs with proper form. Quality matters more than reps.',
    goals: [
      'Achieve 20 perfect push-ups',
      'Achieve 10 strict pull-ups from dead hang',
      'Hold a 60-second perfect plank',
      'Hold a 30-second hollow body',
      'Achieve 20 full-depth bodyweight squats',
      'Establish daily movement practice',
      'Build the habit of training that lasts a lifetime'
    ],
    keyMovements: [
      'Wall push-up → Incline push-up → Full push-up',
      'Dead hang → Scapular pull → Negative pull-up → Pull-up',
      'Australian row for horizontal pulling',
      'Hollow body hold',
      'Arch body hold',
      'Plank (progressing to 60+ seconds)',
      'Bodyweight squat (full depth)',
      'Split squat for unilateral development',
      'Dip progression (bench → parallel bar)'
    ],
    dailyPractice: [
      'Daily: Mobility circuit from Phase 0 (10 minutes)',
      'Daily: 2 x dead hang (30-60 seconds)',
      'Training days: Follow 3-day program structure',
      'Rest days: Light mobility and skill exposure',
      'Weekly: Record form with video to identify errors'
    ],
    weeklyStructure: [
      'Day 1: Push + Core — push-up progression, plank, hollow body, arch body',
      'Day 2: Rest or mobility only',
      'Day 3: Pull + Legs — dead hang, rows, pull-up progression, squat',
      'Day 4: Rest or mobility only',
      'Day 5: Full body + Introduction — dips, combination work',
      'Day 6: Optional light skill practice',
      'Day 7: Complete rest'
    ],
    masteryRequirements: [
      '20 PERFECT push-ups (not just 20 reps — form must be perfect)',
      '10 strict pull-ups from dead hang to chin over bar, full arm extension each rep',
      '10 strict dips, full range, no shoulder shrugging',
      '60-second perfect plank without any movement',
      '30-second hollow body with lower back flat',
      '20 full-depth squats with heels flat',
      '60-second dead hang',
      '10 scapular pull-ups'
    ],
    mobilityFocus: [
      'Continue all Phase 0 mobility',
      'Wrist mobility increasing toward 80 degrees',
      'Thoracic rotation — improving overhead position',
      'Hip flexor stretching for squat depth improvement',
      'Hamstring flexibility for L-sit preparation'
    ],
    phrehab: [
      'Before every session: wrist CARs, shoulder CARs, scapular circles',
      'After every session: chest stretch, lat stretch, hip flexor stretch',
      'Rotator cuff maintenance: external rotation band work',
      'Lower trapezius building: prone T-Y-W exercises weekly'
    ],
    milestones: [
      'Week 2: First unassisted push-up with perfect form',
      'Week 4: 10 clean push-ups',
      'Week 6: First strict pull-up from dead hang',
      'Week 8: 5 strict pull-ups',
      'Week 10: 60-second plank achieved',
      'Week 12: 10 strict pull-ups',
      'Week 16: All mastery requirements met'
    ],
    unlocks: 'Phase 2 — Intermediate Development (skill training begins)',
    commonPitfalls: [
      'Doing kipping pull-ups instead of building strict strength',
      'Partial range push-ups and pull-ups — momentum over integrity',
      'Adding too much volume too fast — beginner enthusiasm leads to overuse injuries',
      'Neglecting the hollow body — skipping this delays ALL future skills',
      'Inconsistency — 3 days per week for 16 weeks beats 7 days for 4 weeks then burnout'
    ],
    scienceNotes: 'Research by Kraemer and Ratamess shows that beginners achieve the most rapid strength gains through consistent training of fundamental movement patterns. The "beginner gains" phenomenon occurs because neural adaptation (motor unit recruitment improvement) happens faster than structural adaptation (muscle growth). This is why perfect form is paramount at this stage — you are building the neural pathways that will carry you for years.'
  },
  {
    id: 'phase-2',
    phase: 2,
    title: 'Phase 2: INTERMEDIATE DEVELOPMENT',
    subtitle: 'Skill Training Begins — The Exciting Stage',
    duration: '12-24 weeks',
    level: 'intermediate',
    color: 'from-blue-500 to-blue-700',
    description: 'You’ve mastered the basics. Now begin skill work: L-sits, pike push-ups, handstands, and planche/lever prep. This is where real progress starts.',
    goals: [
      'Achieve first muscle-up or solid progressions toward it',
      'Establish solid L-sit hold (15+ seconds)',
      'Progress wall handstand to chest-to-wall or kick-up attempts',
      'Begin planche lean and pseudo planche push-up work',
      'Achieve pistol squat (assisted or full)',
      'Build explosive push-up and clapping push-up',
      'Begin front lever tuck holds'
    ],
    keyMovements: [
      'Explosive push-up → Clapping push-up',
      'Archer push-up (OAP preparation)',
      'Diamond and pike push-up mastery',
      'Muscle-up (bar) — progressions',
      'Weighted pull-up (add load progressively)',
      'L-sit → V-sit progressions',
      'Wall handstand → Chest-to-wall → Kick-up practice',
      'Tuck front lever hold',
      'Tuck back lever / Skin the cat',
      'Pseudo planche push-up',
      'Planche lean',
      'Pistol squat progression',
      'Dragon flag negatives → Dragon flag'
    ],
    dailyPractice: [
      'Daily: Phase 0 mobility (10 minutes)',
      'Daily: Handstand kick-up practice (5-10 minutes separate from main workout)',
      'Training days: 4-day intermediate program',
      'Daily: Wrist conditioning if doing planche work',
      'Skill practice: Separate from strength work when possible'
    ],
    weeklyStructure: [
      'Day 1: Push Skills (handstand, planche lean, pseudo planche) + Push strength',
      'Day 2: Pull Skills (front lever, muscle-up) + Pull strength',
      'Day 3: Rest or mobility',
      'Day 4: Core skills (L-sit, dragon flag) + Handstand dedicated session',
      'Day 5: Legs + Mobility comprehensive',
      'Days 6-7: Rest or skill play'
    ],
    masteryRequirements: [
      '3 clean muscle-ups OR consistent chest-to-bar pull-up with strong transition',
      '15-second L-sit hold, full extension',
      '30-second wall handstand with hollow body (not banana)',
      '15 archer push-ups per side',
      '5 second tuck front lever hold',
      '5 clean one-arm push-up per side (or very close)',
      '5 pistol squats per leg',
      'Dragon flag 5 reps clean'
    ],
    mobilityFocus: [
      'Active shoulder overhead stretching for handstand alignment',
      'Wrist extension to 90 degrees for planche and HSPU preparation',
      'Hip flexor stretching for L-sit quality',
      'Hamstring flexibility for L-sit and pike push-up',
      'Thoracic extension for bridge and handstand',
      'Straddle flexibility beginning (for straddle planche later)'
    ],
    phrehab: [
      'Wrist conditioning before every planche/handstand session — mandatory',
      'Shoulder prehab: band pull-aparts, face pulls, sleeper stretch',
      'Scapular stability work increases — ring support holds, RTO positions',
      'Elbow tendon care: reverse curl work, wrist flexor conditioning',
      'Hip flexor prehab: active hip CARs before L-sit training'
    ],
    milestones: [
      'Week 4: Tuck front lever 5 seconds achieved',
      'Week 6: L-sit 10 seconds achieved',
      'Week 8: First muscle-up attempt (or strong progressions)',
      'Week 12: Consistent muscle-ups (3+ reps)',
      'Week 16: Freestanding handstand kick-up attempts successful',
      'Week 20: Tuck planche 3-5 seconds achieved',
      'Week 24: All mastery requirements met'
    ],
    unlocks: 'Phase 3 — Advanced Skill Mastery (planche, full front lever, HSPU, freestanding handstand)',
    commonPitfalls: [
      'Training skills when fatigued from strength work — skills need neural freshness',
      'Too many skills at once — focus on 2-3 key skills per training block',
      'Neglecting antagonist training — heavy planche lean without balancing pull work leads to shoulder problems',
      'Rushing the tuck planche — the moment arm jump is enormous from lean to tuck',
      'Not filming form — many errors are invisible without video feedback',
      'Training handstand on tired wrists after planche work'
    ],
    scienceNotes: 'Skill acquisition research by Fitts and Posner shows motor learning occurs in three phases: cognitive (conscious effort), associative (refinement), and autonomous (automatic). Most calisthenics practitioners remain in the cognitive phase for too long because they train skills when fatigued. Skills must be trained when the nervous system is fresh — research shows motor learning rate drops by 40-60% when training under fatigue.'
  },
  {
    id: 'phase-3',
    phase: 3,
    title: 'Phase 3: ADVANCED SKILL MASTERY',
    subtitle: 'The Elite Skills — Years in the Making',
    duration: '12-36 weeks',
    level: 'advanced',
    color: 'from-orange-500 to-red-600',
    description: 'Phase 3 builds advanced skills like planche, front lever, handstand push-ups, one-arm push-ups, and ring work. Progress is slow and requires patience, consistency, and precision.',
    goals: [
      'Achieve freestanding handstand 30+ seconds',
      'Achieve wall HSPU 5-10 reps',
      'Progress toward full planche (straddle or full)',
      'Achieve full front lever 5-10 seconds',
      'Achieve one-arm push-up perfect form',
      'Ring muscle-up mastery',
      'Begin iron cross and human flag progressions'
    ],
    keyMovements: [
      'Freestanding handstand → Handstand push-up',
      'Advanced tuck planche → Straddle planche → Full planche',
      'One-leg front lever → Straddle → Full front lever',
      'One-arm push-up progression',
      'Ring muscle-up (strict)',
      'Deficit HSPU',
      'Skin the cat → Back lever',
      'Human flag progressions',
      'Iron cross band-assisted progressions',
      'One-arm chin-up progressions',
      'L-sit → V-sit → Manna progressions'
    ],
    dailyPractice: [
      'Daily: 15-20 minute mobility and prehab protocol (this increases at advanced level)',
      'Daily: Handstand practice — 10-15 minutes as standalone session',
      'Training days: 4-5 day program with skill prioritization',
      'Daily: Wrist conditioning before all planche/handstand work'
    ],
    weeklyStructure: [
      'Day 1: Planche focus + Push strength',
      'Day 2: Pull + Front lever + Rings',
      'Day 3: Handstand intensive + Core skills',
      'Day 4: Active recovery — mobility deep session',
      'Day 5: Legs + Mobility + Human flag work',
      'Days 6-7: Rest or optional skill work'
    ],
    masteryRequirements: [
      'Freestanding handstand 30 seconds consistent',
      'HSPU 8+ reps strict, head to floor, wall supported',
      'Straddle planche 10+ seconds OR full planche 3+ seconds',
      'Front lever 5-10 second hold (full or straddle)',
      'One-arm push-up 5 reps per side, clean',
      'Ring muscle-up 5 reps strict or 8 reps kipping',
      'Human flag 5-8 seconds (straddle or full)',
      'Back lever 10+ seconds'
    ],
    mobilityFocus: [
      'DAILY overhead mobility work — handstand requires perfect shoulder position',
      'Front split progressions for straddle front lever quality',
      'Wrist extension maintained at 90+ degrees — planche load is extreme',
      'Bridge and thoracic extension for HSPU range',
      'Active shoulder extension for back lever and iron cross',
      'Pancake flexibility (seated forward fold wide) for straddle planche'
    ],
    phrehab: [
      'Elbow prehab is critical — front lever and planche load elbow in opposite ways',
      'Bicep tendon specific prehab for front lever loading',
      'Shoulder internal rotation stretching (sleeper stretch) for ring skills',
      'Wrist conditioning protocol is non-negotiable — 8+ minutes before training',
      'Regular soft tissue work — massage, foam rolling for recovery',
      'Contrast therapy (hot/cold) for tendon recovery'
    ],
    milestones: [
      'Month 2: Freestanding handstand 10+ seconds consistent',
      'Month 3: HSPU 5 reps strict',
      'Month 6: Freestanding handstand 30 seconds',
      'Month 6: Advanced tuck planche 10+ seconds',
      'Month 9: Straddle planche 5 seconds',
      'Month 12: Full front lever 5 seconds',
      'Month 18: Full planche 3-5 seconds OR straddle planche 15 seconds',
      'Month 24+: All mastery requirements met'
    ],
    unlocks: 'Phase 4 — Elite and Mastery Level',
    commonPitfalls: [
      'Expecting fast progress — advanced skills progress at 5-10% the rate of beginner skills',
      'Training through joint pain — at advanced level, loads are high enough to cause serious injury',
      'Insufficient deloading — overtraining is the most common barrier to advanced progress',
      'Neglecting mobility as training intensity increases',
      'Comparing to others online — advanced skill timelines are highly individual',
      'One-track focus — working only one skill while neglecting antagonists and balance'
    ],
    scienceNotes: 'At advanced levels, progress shifts from neural adaptation (fast) to structural adaptation (slow). Tendon stiffness, muscle cross-sectional area in specific angles, and joint capsule adaptation all progress at 1/3 to 1/10 the rate of beginner neural gains. Research by Magnusson and Kjaer shows that elite tendon adaptations require 12-36 months of specific loading. This explains why elite calisthenics skills require years to achieve.'
  },
  {
    id: 'phase-4',
    phase: 4,
    title: 'Phase 4: ELITE MASTERY',
    subtitle: 'The Pinnacle of Human Movement Capability',
    duration: 'Ongoing — mastery has no end point',
    level: 'elite',
    color: 'from-purple-600 to-yellow-500',
    description: 'Phase 4 is elite calisthenics: iron cross, Maltese, Victorian, one-arm handstand, and one-arm pull-up. Reaching this level takes years of consistent, disciplined training.',
    goals: [
      'Iron cross 5+ seconds',
      'Full planche 10+ seconds and planche push-ups',
      'One-arm handstand',
      'One-arm pull-up',
      'Freestanding HSPU (without wall)',
      'Maltese progressions',
      'Victorian progressions',
      'Complete mastery of all Phase 1-3 skills at elite quality'
    ],
    keyMovements: [
      'Iron cross (assisted → full)',
      'Full planche → Planche push-ups',
      'One-arm handstand',
      'One-arm pull-up',
      'Freestanding HSPU',
      'Maltese position on rings',
      'Victorian position on rings',
      'Impossible dip (Hefesto)',
      'Zanetti press',
      'Full Manna',
      'One-arm front lever',
      'One-arm back lever'
    ],
    dailyPractice: [
      'Daily: 20-30 minute mobility and recovery protocol',
      'Daily: Handstand practice as dedicated standalone session',
      'Training days: Highly individualized 5-6 day program',
      'Continuous: Active soft tissue management and joint maintenance'
    ],
    weeklyStructure: [
      'Highly individualized based on weak points and goals',
      'Minimum 2 dedicated skill sessions per target skill',
      'Antagonist balance essential — 1:1 push to pull ratio minimum',
      'Weekly: Full mobility and recovery session'
    ],
    masteryRequirements: [
      'Iron cross 8-10 second hold',
      'Full planche 10+ seconds and 5+ planche push-ups',
      'One-arm handstand against wall or free',
      'One-arm pull-up 3+ reps per side',
      'Freestanding HSPU 3+ reps',
      'Maltese 3-5 seconds',
      'Complete mastery of ALL Phase 3 requirements'
    ],
    mobilityFocus: [
      'Comprehensive daily joint maintenance becomes non-negotiable at this level',
      'Every session preceded by 15-20 minutes of targeted mobility',
      'Active flexibility maintained across all ranges and positions',
      'Recovery mobility sessions (yoga, stretching) become training in themselves'
    ],
    phrehab: [
      'Full body prehab protocol — 20+ minutes before every session',
      'Bicep tendon management for iron cross training',
      'Wrist maintenance is life at planche push-up level',
      'Regular physiotherapy assessment for early detection of issues',
      'Periodization of high-risk skills to allow tendon recovery'
    ],
    milestones: [
      'Year 1 of Phase 4: Band-assisted iron cross 8 seconds',
      'Year 1-2: First one-arm pull-up',
      'Year 2: Iron cross without bands 3+ seconds',
      'Year 2-3: Planche push-ups 5 reps',
      'Year 3+: Iron cross 8-10 seconds, advanced skills approaching elite standards'
    ],
    unlocks: 'Self-directed mastery — the journey becomes the destination',
    commonPitfalls: [
      'Biceps tendon injury from iron cross training — the most serious risk at this level',
      'Wrist injuries from planche push-up volume',
      'Ego-driven skill attempts without adequate preparation',
      'Neglecting recovery as training volume and intensity peaks',
      'Not having a coach or training partner for safety in extreme skills'
    ],
    scienceNotes: 'At elite levels, training adaptation is limited by connective tissue (not muscle) capacity in almost all cases. Research in high-performance gymnastics training shows that training load management and injury prevention become the primary determinants of long-term progress. Elite gymnasts typically train under qualified coaching throughout — the complexity and risk of elite movements makes external feedback critical for both optimization and safety.'
  }
];
