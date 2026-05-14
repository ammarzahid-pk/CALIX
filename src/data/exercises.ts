export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'elite';
export type Category = 'push' | 'pull' | 'core' | 'legs' | 'full-body' | 'mobility' | 'static' | 'dynamic' | 'plyometric' | 'isometric';
export type Equipment = 'none' | 'bar' | 'rings' | 'parallettes' | 'dip-bars' | 'band' | 'weighted';
export type MovementType = 'static' | 'dynamic' | 'explosive' | 'eccentric' | 'isometric';

export interface Exercise {
  id: string;
  name: string;
  difficulty: Difficulty;
  category: Category[];
  equipment: Equipment[];
  movementType: MovementType;
  muscleGroups: string[];
  prerequisites: string[];
  unlocks: string[];
  description: string;
  executionSteps: string[];
  coachingCues: string[];
  commonMistakes: string[];
  breathingGuide: string;
  tempoRecommendation: string;
  masteryStandards: { minimum: string; advanced: string; elite: string; };
  mobilityRequirements: string[];
  strengthRequirements: string[];
  progressions: string[];
  regressions: string[];
  variations: string[];
  injuryRisks: string[];
  scienceNotes: string;
  tags: string[];
}

export const exercises: Exercise[] = [
  {
    id: 'wall-push-up',
    name: 'Wall Push-Up',
    difficulty: 'beginner',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Chest (Pectoralis Major)', 'Anterior Deltoid', 'Triceps Brachii', 'Serratus Anterior'],
    prerequisites: [],
    unlocks: ['incline-push-up', 'knee-push-up'],
    description: 'Beginner push using a wall incline. Builds push mechanics, scapular control, and core tension. Base of all push movements.',
    executionSteps: [
      'Stand arm-length from a wall, place hands shoulder-width apart at chest height.',
      'Body forms a straight diagonal line from head to heels — activate core and glutes.',
      'Retract scapulae slightly before initiating the movement.',
      'Lower your chest toward the wall by bending elbows, keeping them at 45 degrees to torso.',
      'At full range, scapulae protract (spread apart).',
      'Press back to start with full elbow extension, re-engaging shoulder blades.',
      'Maintain rigid body alignment throughout — no hips dropping or arching.'
    ],
    coachingCues: [
      'Squeeze the wall apart with your hands',
      'Protect your armpits — elbows at 45 degrees, not flared',
      'Neck neutral — eyes forward slightly down',
      'Core like a plank — no sagging hips',
      'Full push equals full range equals serratus fires'
    ],
    commonMistakes: [
      'Flaring elbows to 90 degrees (internal shoulder impingement risk)',
      'Hips sagging or piking (core disengaged)',
      'Partial range of motion — chest not touching wall',
      'Head jutting forward (cervical strain)',
      'Not protracting scapulae at top (serratus not trained)'
    ],
    breathingGuide: 'Inhale as you lower toward the wall. Exhale forcefully as you press away — creates intra-abdominal pressure.',
    tempoRecommendation: '3-1-1: Lower 3 seconds, 1 second pause at wall, press in 1 second.',
    masteryStandards: {
      minimum: '20 clean reps with perfect form, 3 sets, controlled tempo',
      advanced: '30 reps, 4 sets, 3-1-1 tempo, zero form breakdown',
      elite: 'Move to incline push-ups — wall push-up mastered'
    },
    mobilityRequirements: ['Basic wrist extension', 'Shoulder flexion to 90 degrees'],
    strengthRequirements: ['No minimum — entry level movement'],
    progressions: ['incline-push-up', 'knee-push-up'],
    regressions: [],
    variations: ['Narrow wall push-up', 'Wide wall push-up', 'One-arm wall push-up (partial assist)'],
    injuryRisks: ['Wrist strain if wrist mobility is poor — use fist position if needed'],
    scienceNotes: 'The wall push-up loads the pushing chain at approximately 20-30% bodyweight depending on angle. Serratus anterior activation is critical for scapular health and is initiated here. This movement establishes the neuromuscular pattern for all horizontal pressing.',
    tags: ['wall', 'beginner', 'push', 'no equipment', 'entry level', 'foundational']
  },
  {
    id: 'incline-push-up',
    name: 'Incline Push-Up',
    difficulty: 'beginner',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major (lower fibers)', 'Anterior Deltoid', 'Triceps', 'Serratus Anterior', 'Core'],
    prerequisites: ['wall-push-up'],
    unlocks: ['push-up', 'knee-push-up', 'diamond-push-up'],
    description: 'Hands elevated push-up (bench/box). Increases load while keeping proper form. Bridge between wall and full push-ups.',
    executionSteps: [
      'Place hands on a surface at approximately hip height.',
      'Walk feet back until body forms a straight diagonal line.',
      'Engage core, glutes, and quads — full body tension.',
      'Lower chest to surface by bending elbows at 45 degrees to torso.',
      'Touch chest (not stomach) to surface at full range.',
      'Press back explosively to full arm extension.',
      'Scapulae protract at the top — slight rounding of upper back is correct.'
    ],
    coachingCues: [
      'Push the floor away from you',
      'Your body is a plank — from ears to heels',
      'Touch chest to surface — not stomach',
      'Elbows track behind you, not out to the sides'
    ],
    commonMistakes: [
      'Hips hiking (piking) — reduces core engagement',
      'Elbows flared at 90 degrees — shoulder impingement risk',
      'Partial range — not lowering to full contact',
      'Neck strain from looking up'
    ],
    breathingGuide: 'Inhale during eccentric (lowering), exhale during concentric (pressing). Brace core on inhale before each rep.',
    tempoRecommendation: '3-0-1-0: 3 second descent, no pause, 1 second ascent.',
    masteryStandards: {
      minimum: '15 clean reps at mid-height incline, 3 sets',
      advanced: '20 reps, 4 sets, controlled 3-1-1 tempo',
      elite: 'Progress to full floor push-ups'
    },
    mobilityRequirements: ['Wrist extension 70 degrees', 'Shoulder internal/external rotation freedom'],
    strengthRequirements: ['Wall push-up mastery (20 reps)'],
    progressions: ['push-up'],
    regressions: ['wall-push-up'],
    variations: ['Wide incline', 'Diamond incline', 'Archer incline', 'Explosive incline'],
    injuryRisks: ['Wrist extension strain — build wrist mobility concurrently', 'Shoulder pain if scapulae not controlled'],
    scienceNotes: 'As incline decreases, load increases toward full bodyweight. EMG studies show chest activation is highest in the mid-range of motion. Serratus anterior is maximally engaged at the end range of protraction.',
    tags: ['incline', 'beginner', 'push', 'no equipment', 'progression']
  },
  {
    id: 'push-up',
    name: 'Push-Up',
    difficulty: 'beginner',
    category: ['push', 'full-body'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii', 'Serratus Anterior', 'Core (Anti-Extension)', 'Glutes', 'Quads (Isometric)'],
    prerequisites: ['incline-push-up'],
    unlocks: ['wide-push-up', 'diamond-push-up', 'archer-push-up', 'pike-push-up', 'explosive-push-up', 'pseudo-planche-push-up', 'decline-push-up'],
    description: 'Core calisthenics push movement. Builds full-body tension, scapular control, and strength. Foundation for all advanced push skills.',
    executionSteps: [
      'Start in plank position, hands slightly wider than shoulder-width, fingers spread.',
      'Stack wrists below or slightly outside shoulders.',
      'Create a rigid body: squeeze glutes, brace core, tuck pelvis slightly.',
      'Full body from head to heels forms ONE straight line.',
      'Initiate by retracting scapulae slightly, then lower body as one unit.',
      'Elbows track at 45 degrees to torso — arrowhead shape, not T shape.',
      'Chest, not stomach, touches the ground. Hips remain inline.',
      'Press back to start. At the top, protract scapulae — push thoracic spine toward ceiling.',
      'Lock out arms at top. Body stays rigid throughout.'
    ],
    coachingCues: [
      'Your body is a steel rod — not a hinge',
      'Elbows point behind you — not sideways',
      'Squeeze your glutes so hard you could crack a walnut',
      'Push the floor THROUGH the Earth',
      'At the top, push your shoulder blades apart — serratus ON',
      'Eyes look 18 inches in front — not straight down'
    ],
    commonMistakes: [
      'Hips sagging — compresses lumbar spine',
      'Hips piking — disengages core and legs',
      'Flared elbows (90 degrees to torso) — impingement and pec stress',
      'Partial range — not touching chest to ground',
      'Head dropping forward — cervical extension strain',
      'Not protracting scapulae at top — serratus not trained',
      'Holding breath throughout — increases blood pressure',
      'Wrist collapse inward — wrist stability issue'
    ],
    breathingGuide: 'Deep inhale at top, brace core. Exhale powerfully during the press phase. Never hold breath for high reps.',
    tempoRecommendation: '3-1-1-0: 3s lower, 1s pause at ground, 1s press. Master slow before fast.',
    masteryStandards: {
      minimum: '20 strict reps, 3 sets, full range, perfect form',
      advanced: '30+ reps perfect form, 4 sets OR 10 reps at 3-3-1 tempo',
      elite: '50+ consecutive reps OR weighted push-ups (+20kg), progress to archer/pseudo-planche'
    },
    mobilityRequirements: ['Wrist extension 70 degrees', 'Shoulder internal rotation adequate', 'Thoracic extension adequate'],
    strengthRequirements: ['15 incline push-ups at low incline'],
    progressions: ['archer-push-up', 'pseudo-planche-push-up', 'explosive-push-up', 'pike-push-up', 'decline-push-up'],
    regressions: ['incline-push-up', 'knee-push-up'],
    variations: ['Wide grip', 'Diamond/close grip', 'Staggered hand', 'Fingertip', 'Fist', 'One-arm negatives', 'Pause push-ups', 'Slow-mo push-ups', '5-count descent'],
    injuryRisks: ['Wrist strain — build wrist mobility in parallel', 'Shoulder impingement if elbows flared', 'Low back if core disengaged'],
    scienceNotes: 'EMG studies show the push-up activates pectoralis major at 69-75% of maximal voluntary contraction (MVC), anterior deltoid at ~72% MVC, and triceps at ~70% MVC. Serratus anterior activation is critical for long-term shoulder health — often undertrained in weight room pressing.',
    tags: ['foundational', 'push', 'no equipment', 'full-body', 'beginner', 'gateway']
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push-Up',
    difficulty: 'beginner',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Triceps Brachii (primary)', 'Pectoralis Major (clavicular head)', 'Anterior Deltoid'],
    prerequisites: ['push-up'],
    unlocks: ['pike-push-up'],
    description: 'Hands in diamond shape. Focuses on triceps strength and elbow extension. Useful for planche and handstand push-up progressions.',
    executionSteps: [
      'Form a diamond shape with hands — thumbs and index fingers touch.',
      'Position diamond at or slightly below chest level.',
      'Body remains rigid as standard push-up.',
      'Lower chest toward hands — elbows go back and slightly out.',
      'Full range — chest touches the diamond.',
      'Press explosively to full extension, emphasizing elbow lockout.'
    ],
    coachingCues: [
      'Elbows skim your ribs as they travel back',
      'Lock out hard at the top — triceps fully contract',
      'Diamond at chest, not at face'
    ],
    commonMistakes: [
      'Hands too far forward — reduces triceps load',
      'Elbows drifting too wide',
      'Not achieving full range'
    ],
    breathingGuide: 'Inhale descend, exhale press.',
    tempoRecommendation: '2-1-1-0',
    masteryStandards: {
      minimum: '15 reps, 3 sets',
      advanced: '20 reps, 4 sets',
      elite: '25 reps or weighted'
    },
    mobilityRequirements: ['Good wrist extension', 'Shoulder internal rotation'],
    strengthRequirements: ['20 standard push-ups'],
    progressions: ['pike-push-up'],
    regressions: ['push-up'],
    variations: ['Archer diamond', 'Close grip push-up parallel'],
    injuryRisks: ['Wrist discomfort — try rotating hands 45 degrees outward if painful'],
    scienceNotes: 'Diamond push-up produces the highest triceps EMG activation among push-up variations at approximately 88% MVC. Critical for developing elbow extension strength required for handstand push-up lockout and planche.',
    tags: ['triceps', 'close grip', 'push', 'triceps dominant']
  },
  {
    id: 'decline-push-up',
    name: 'Decline Push-Up',
    difficulty: 'beginner',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Upper Pectoralis (clavicular)', 'Anterior Deltoid', 'Triceps', 'Serratus Anterior'],
    prerequisites: ['push-up'],
    unlocks: ['pike-push-up', 'handstand-push-up'],
    description: 'Feet-elevated push-up. Targets upper chest and shoulders. Prepares you for vertical pressing strength.',
    executionSteps: [
      'Place feet on elevated surface (higher = harder).',
      'Hands on floor, slightly wider than shoulder-width.',
      'Body forms a straight line from head to elevated feet.',
      'Lower toward floor maintaining elbow 45-degree tracking.',
      'Touch upper chest to floor — not stomach.',
      'Press back to full extension.'
    ],
    coachingCues: [
      'Taller the feet, more shoulder work',
      'Keep the body rigid — no piking at the hips',
      'Upper chest to ground, not your belly button'
    ],
    commonMistakes: [
      'Hips sagging due to changed leverage',
      'Not achieving full range',
      'Looking too far forward'
    ],
    breathingGuide: 'Inhale descend, exhale press.',
    tempoRecommendation: '3-1-1-0',
    masteryStandards: {
      minimum: '15 reps elevated 12-18 inches, 3 sets',
      advanced: '20 reps at 24+ inch elevation',
      elite: 'Pike push-up territory'
    },
    mobilityRequirements: ['Hip flexor flexibility for foot elevation', 'Shoulder mobility adequate'],
    strengthRequirements: ['25+ standard push-ups'],
    progressions: ['pike-push-up'],
    regressions: ['push-up'],
    variations: ['Low decline', 'High decline', 'Feet on wall'],
    injuryRisks: ['Lower back if core fails', 'Shoulder impingement at extreme decline without mobility'],
    scienceNotes: 'As feet elevation increases, the angle of pressing approaches vertical. At approximately 60 degree body angle, anterior deltoid becomes primary mover. This creates a natural continuum toward pike push-ups and eventually handstand push-ups.',
    tags: ['upper chest', 'decline', 'push', 'shoulder press transition']
  },
  {
    id: 'archer-push-up',
    name: 'Archer Push-Up',
    difficulty: 'intermediate',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps', 'Serratus Anterior', 'Biceps (eccentric assist)', 'Core'],
    prerequisites: ['push-up'],
    unlocks: ['one-arm-push-up'],
    description: 'One arm bends while the other stays straight. Builds unilateral strength and control. Key step toward one-arm push-up.',
    executionSteps: [
      'Start wide — hands 2-2.5x shoulder-width apart.',
      'Shift bodyweight to one side and begin lowering toward that arm.',
      'The pressing arm bends normally at 45 degrees while opposite arm extends fully.',
      'At bottom, chest is over the bent arm — extended arm is fully straight.',
      'Press back to center, return to start.',
      'Alternate sides or complete all reps on one side then switch.'
    ],
    coachingCues: [
      'Shift your center toward the working arm',
      'Straight arm is your kickstand — push THROUGH the working arm',
      'Keep hips square — resist rotation temptation',
      'Full chest contact on the working side at the bottom'
    ],
    commonMistakes: [
      'Hip rotation — using momentum, not strength',
      'Extended arm bending — cheating by using both arms',
      'Not achieving full range on working side',
      'Core disengagement leading to hip sag'
    ],
    breathingGuide: 'Brace core tightly. Inhale before lowering, exhale on press.',
    tempoRecommendation: '3-1-2-0 — slow and controlled, emphasize unilateral mastery',
    masteryStandards: {
      minimum: '8 reps per side, 3 sets, minimal hip rotation',
      advanced: '12 reps per side, 4 sets, zero rotation',
      elite: '15 reps per side — begin one-arm push-up progressions'
    },
    mobilityRequirements: ['Good shoulder mobility', 'Wrist extension 80 degrees', 'Hip stability'],
    strengthRequirements: ['30 standard push-ups'],
    progressions: ['one-arm-push-up'],
    regressions: ['wide-push-up', 'push-up'],
    variations: ['Archer with feet wide', 'Archer with elevated hands', 'Sliding archer'],
    injuryRisks: ['Pec strain if range too aggressive too fast', 'Rotator cuff stress with poor shoulder mobility'],
    scienceNotes: 'Archer push-ups load the working arm at approximately 70-80% of bodyweight compared to 50% in bilateral push-ups. This progressive overload through asymmetry is one of the most biomechanically efficient methods to develop one-arm push-up strength.',
    tags: ['unilateral', 'push', 'one-arm progression', 'intermediate', 'strength']
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push-Up',
    difficulty: 'intermediate',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Anterior Deltoid (primary)', 'Lateral Deltoid', 'Triceps', 'Upper Trapezius', 'Serratus Anterior'],
    prerequisites: ['decline-push-up', 'diamond-push-up'],
    unlocks: ['wall-handstand-push-up'],
    description: 'Pike position push-up (hips raised). Shifts load to shoulders. Bridge between push-ups and handstand push-ups.',
    executionSteps: [
      'Start in downward dog position — hips high, body forming inverted-V.',
      'Walk feet in closer to increase angle (more upright = harder).',
      'Hands shoulder-width, arms straight.',
      'Lower head toward floor by bending elbows — track them forward and out.',
      'Head should reach level with hands at the bottom.',
      'Press back to straight arms.',
      'At full extension, press shoulders up toward ears (scapular elevation).'
    ],
    coachingCues: [
      'Drive your head through your arms at the top',
      'Hips stay high — this is a shoulder press, not a push-up',
      'Elbows slightly forward — not straight out to sides',
      'At lockout, shrug your shoulders — push your head through'
    ],
    commonMistakes: [
      'Hips dropping — reverting to push-up pattern',
      'Not going to full depth (head to floor level)',
      'Not pressing scapulae up at lockout',
      'Too wide foot position — reduces hip height'
    ],
    breathingGuide: 'Inhale during descent, exhale powerfully on press. Brace core hard.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: {
      minimum: '10 clean reps with head to ground level, 3 sets',
      advanced: '15 reps full range, 4 sets',
      elite: '20 reps, move to wall HSPU'
    },
    mobilityRequirements: ['Hamstring flexibility (to achieve pike)', 'Thoracic extension', 'Shoulder overhead mobility'],
    strengthRequirements: ['20 decline push-ups', '15 diamond push-ups'],
    progressions: ['wall-handstand-push-up'],
    regressions: ['decline-push-up'],
    variations: ['Wide pike', 'Close grip pike', 'Elevated feet pike', 'Deficit pike'],
    injuryRisks: ['Neck compression if head not placed correctly', 'Wrist strain at steep angle'],
    scienceNotes: 'Pike push-ups activate anterior deltoid at approximately 75-80% MVC when performed at steep angles. The overhead pressing pattern recruits upper trapezius and serratus anterior for scapular upward rotation — essential for shoulder health in overhead movements.',
    tags: ['shoulders', 'vertical press', 'handstand progression', 'intermediate', 'no equipment']
  },
  {
    id: 'pseudo-planche-push-up',
    name: 'Pseudo Planche Push-Up',
    difficulty: 'intermediate',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Anterior Deltoid (primary)', 'Pectoralis Major', 'Triceps', 'Serratus Anterior', 'Core (anti-extension)'],
    prerequisites: ['push-up', 'diamond-push-up'],
    unlocks: ['tuck-planche', 'planche-lean'],
    description: 'Hands by hips, fingers backward, body leaned forward. Builds shoulder strength and mimics planche mechanics. Key drill for planche training.',
    executionSteps: [
      'From push-up position, rotate hands backward 180 degrees (fingers toward feet).',
      'Walk hands down toward hips, shifting bodyweight forward over hands.',
      'The more forward the lean, the harder.',
      'Maintain rigid plank — engage core maximally.',
      'Lower by bending elbows, keeping elbows tracking back.',
      'Chest lowers toward hands (between wrists and hips).',
      'Press back to full extension maintaining the forward lean throughout.'
    ],
    coachingCues: [
      'Lean forward — the lean is the exercise, not just the push',
      'Pull your hands toward your hips as you press',
      'Posterior pelvic tilt — round your low back slightly',
      'Hollow body throughout — ab engagement is mandatory'
    ],
    commonMistakes: [
      'Insufficient forward lean — makes it just a push-up',
      'Losing hollow body — arching low back',
      'Wrist collapsing due to lack of conditioning',
      'Hips rising instead of maintaining lean'
    ],
    breathingGuide: 'Exhale sharply on press. Keep breathing between reps.',
    tempoRecommendation: '3-1-2-0: Build up slowly, focus on form over reps',
    masteryStandards: {
      minimum: '10 reps with moderate lean, 3 sets',
      advanced: '15 reps, strong forward lean, 4 sets',
      elite: '20 reps with hands near hips (full pseudo planche position)'
    },
    mobilityRequirements: ['Wrist extension 90 degrees', 'Shoulder flexion 180 degrees', 'Hip flexor flexibility'],
    strengthRequirements: ['30 standard push-ups', '15 diamond push-ups'],
    progressions: ['tuck-planche', 'planche-lean'],
    regressions: ['diamond-push-up', 'push-up'],
    variations: ['Hands forward 45 degrees (easier lean)', 'Deficit pseudo planche', 'On parallettes (wrist friendly)'],
    injuryRisks: ['HIGH wrist strain — build wrist conditioning extensively before high volume', 'Shoulder anterior impingement if lean too extreme too soon'],
    scienceNotes: 'As the body leans forward in the pseudo planche position, the moment arm on the shoulder joint increases dramatically, shifting from a horizontally-dominant pressing force to an approximately 45-degree force vector. This mimics planche mechanics while maintaining ground contact for safety.',
    tags: ['planche progression', 'shoulder strength', 'wrist intensive', 'intermediate-advanced', 'push']
  },
  {
    id: 'explosive-push-up',
    name: 'Explosive Push-Up',
    difficulty: 'intermediate',
    category: ['push', 'plyometric'],
    equipment: ['none'],
    movementType: 'explosive',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps', 'Core'],
    prerequisites: ['push-up'],
    unlocks: ['clapping-push-up'],
    description: 'Explosive push-up with hands leaving the ground. Builds power, speed, and force output. Base for advanced plyometric push-ups.',
    executionSteps: [
      'Start in perfect push-up position.',
      'Perform a controlled descent (2-3 seconds).',
      'At the bottom, reverse direction explosively — generate maximum force.',
      'Drive body upward until hands leave the ground.',
      'Land softly — absorb impact with bent elbows, immediately going into next rep.',
      'The landing phase is eccentric training — control it.'
    ],
    coachingCues: [
      'Slow down, explode up',
      'Receive the floor softly — springy not stiff',
      'Maximum intent — press as if the ground is burning',
      'Land with bent elbows ready for the next rep'
    ],
    commonMistakes: [
      'No controlled descent — just flopping down',
      'Landing with locked elbows (joint stress)',
      'Core disengaging on landing',
      'Insufficient explosive intent — not leaving the ground'
    ],
    breathingGuide: 'Quick inhale at top, exhale explosively during press.',
    tempoRecommendation: '2-0-X-0: Controlled descent, explosive concentric',
    masteryStandards: {
      minimum: '5 clean reps with clear air time, 3 sets',
      advanced: '10 reps continuous, hands clear of ground each rep',
      elite: 'Clapping push-ups, 360 push-ups'
    },
    mobilityRequirements: ['Good wrist mobility for landing'],
    strengthRequirements: ['30 clean push-ups'],
    progressions: ['clapping-push-up'],
    regressions: ['push-up'],
    variations: ['Lateral explosive', 'Rotational explosive', 'Single-arm explosive (advanced)'],
    injuryRisks: ['Wrist/elbow stress on landing if not absorbed', 'Shoulder joint loading on impact'],
    scienceNotes: 'Explosive push-ups train fast-twitch (Type II) muscle fibers and the stretch-shortening cycle (SSC). The SSC allows muscles and tendons to store and release elastic energy — this neural adaptation is distinct from maximal strength training and critical for athletic power output.',
    tags: ['explosive', 'power', 'plyometric', 'intermediate', 'push']
  },
  {
    id: 'clapping-push-up',
    name: 'Clapping Push-Up',
    difficulty: 'intermediate',
    category: ['push', 'plyometric'],
    equipment: ['none'],
    movementType: 'explosive',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps', 'Core'],
    prerequisites: ['explosive-push-up'],
    unlocks: ['double-clap-push-up', 'superman-push-up'],
    description: 'Explosive push-up with a clap in mid-air. Builds upper-body power, speed, and coordination. Common in street workout training.',
    executionSteps: [
      'Standard push-up position.',
      'Perform slow controlled descent.',
      'Explode upward with maximum intent.',
      'Once hands leave ground, bring them together and clap.',
      'Rapidly return hands to shoulder-width before landing.',
      'Absorb landing with soft elbows.'
    ],
    coachingCues: [
      'Fast hands — clap and return before landing',
      'More height means more time — it is about power, not just speed',
      'Body stays rigid even airborne'
    ],
    commonMistakes: [
      'Insufficient height — clapping before clearing ground',
      'Core breaking during airborne phase',
      'Hard landing — damaging joints'
    ],
    breathingGuide: 'Sharp exhale at launch.',
    tempoRecommendation: '2-0-X-0',
    masteryStandards: {
      minimum: '5 clean clapping reps, 3 sets',
      advanced: '10 consecutive, clean clap each time',
      elite: 'Double clap, behind-the-back clap'
    },
    mobilityRequirements: ['Good wrist and elbow mobility'],
    strengthRequirements: ['10 explosive push-ups with clear hand lift'],
    progressions: ['double-clap-push-up', 'superman-push-up'],
    regressions: ['explosive-push-up'],
    variations: ['Double clap', 'Behind-back clap', 'Chest clap', '360 spin', 'Side-to-side clap'],
    injuryRisks: ['Hand collision risk', 'Landing impact — wrist/elbow/shoulder'],
    scienceNotes: 'Clapping push-ups require peak power output of approximately 3-4 times body weight during the push-off phase. The coordination between explosive generation and rapid hand repositioning trains neuromuscular timing critical for reactive sports skills.',
    tags: ['plyometric', 'explosive', 'power', 'show', 'street workout', 'intermediate']
  },
  {
    id: 'one-arm-push-up',
    name: 'One-Arm Push-Up',
    difficulty: 'advanced',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major (unilateral)', 'Anterior Deltoid', 'Triceps', 'Core (anti-rotation)', 'Obliques', 'Glutes'],
    prerequisites: ['archer-push-up', 'pseudo-planche-push-up'],
    unlocks: ['ring-one-arm-push-up'],
    description: 'Peak floor push movement. One arm supports full bodyweight with strict form. Demands extreme strength, core stability, and control.',
    executionSteps: [
      'Start with feet wide (2-3x shoulder width) for base of support.',
      'One hand placed directly below shoulder or slightly inside.',
      'Free hand behind back or on inner thigh.',
      'Body must remain as square as possible — minimize rotation.',
      'Lower slowly until chest approaches floor — full range.',
      'The working arm may drift slightly out during descent (normal).',
      'Press back explosively to full extension.',
      'Anti-rotation core engagement is constant throughout.'
    ],
    coachingCues: [
      'Wide feet — your stabilization platform',
      'Keep hips parallel to floor — fight the rotation',
      'Hand slightly inside shoulder — not too far out',
      'Slow descent, explosive press',
      'Brace obliques — rotation is the enemy'
    ],
    commonMistakes: [
      'Feet too narrow — unable to resist rotation',
      'Hip rotation and torso twisting — using momentum',
      'Partial range — not touching chest to ground',
      'Hand too far from shoulder'
    ],
    breathingGuide: 'Maximal brace before each rep. Exhale explosively on press.',
    tempoRecommendation: '4-1-2-0: Ultra-controlled descent, strong press',
    masteryStandards: {
      minimum: '5 reps per side, 3 sets, minimal rotation',
      advanced: '10 reps per side, near-zero rotation, 4 sets',
      elite: '15 reps per side, feet together, full range'
    },
    mobilityRequirements: ['Excellent wrist extension', 'Hip abductor stability', 'Thoracic rotation control'],
    strengthRequirements: ['15 archer push-ups per side', '20 pseudo planche push-ups'],
    progressions: ['ring-one-arm-push-up'],
    regressions: ['archer-push-up'],
    variations: ['Feet together OAP', 'Elevated OAP (feet up)', 'OAP with rotation (partial)'],
    injuryRisks: ['High wrist stress', 'Shoulder joint stress', 'Elbow valgus stress'],
    scienceNotes: 'The one-arm push-up loads the pressing musculature at approximately 80-90% of bodyweight. The anti-rotation demand on the core is extraordinarily high — obliques, QL, and contralateral glute all activate maximally to maintain spinal and pelvic neutrality.',
    tags: ['elite', 'unilateral', 'push', 'advanced', 'strength', 'mastery']
  },
  // ============ PULL MOVEMENTS ============
  {
    id: 'dead-hang',
    name: 'Dead Hang',
    difficulty: 'beginner',
    category: ['pull', 'isometric'],
    equipment: ['bar'],
    movementType: 'isometric',
    muscleGroups: ['Latissimus Dorsi', 'Serratus Anterior', 'Rotator Cuff', 'Forearms', 'Grip', 'Shoulder Capsule'],
    prerequisites: [],
    unlocks: ['scapular-pull', 'australian-row', 'active-hang'],
    description: 'Dead hang from a bar with straight arms. Builds grip strength, shoulder stability, and spine decompression. Essential base for all pulling exercises.',
    executionSteps: [
      'Grip bar slightly wider than shoulder-width. Overhand (pronated) grip.',
      'Jump or step off — let gravity pull you into a full hang.',
      'Arms fully straight — do not bend elbows.',
      'Shoulders hang passively in the beginning (passive hang).',
      'Breathe normally. Relax into the hang.',
      'Progress to active hang: pull shoulders DOWN away from ears.',
      'Hold for time — build up duration gradually.'
    ],
    coachingCues: [
      'Let gravity do the work — fully relax your arms',
      'Later progression: pull shoulders DOWN — depress scapulae',
      'Breathe normally — this is not a plank',
      'Grip: wrap thumb UNDER for passive hang, thumb OVER for security'
    ],
    commonMistakes: [
      'Not fully extending elbows — partial hang, less decompression benefit',
      'Shrugging shoulders — not getting passive hang benefits',
      'Short hold times — insufficient tendon conditioning'
    ],
    breathingGuide: 'Normal breathing throughout. Focus on relaxing and lengthening.',
    tempoRecommendation: 'Hold for time: Start 10-20s, build to 60s+',
    masteryStandards: {
      minimum: '30 second dead hang, 3 sets',
      advanced: '60 second dead hang, comfortable',
      elite: '90+ second hang OR active hang 60s — move to scapular pulls'
    },
    mobilityRequirements: ['Basic overhead reach — no injuries'],
    strengthRequirements: ['None — beginning exercise'],
    progressions: ['active-hang', 'scapular-pull', 'australian-row'],
    regressions: ['Assisted hang (feet on box or chair lightly)'],
    variations: ['Neutral grip hang', 'Underhand hang (supinated)', 'One-arm passive hang (advanced)', 'Towel hang (grip building)'],
    injuryRisks: ['Shoulder pain if rotator cuff issues — start with partial hang or bent-arm hang', 'Grip skin tearing — build calluses gradually'],
    scienceNotes: 'Passive hanging provides spinal decompression (increasing disc height by 1-2mm per session), conditions the shoulder capsule and rotator cuff, and builds collagen density in tendons required for high-load pulling work. Tendons adapt more slowly than muscles — this is why hanging is a long-term investment.',
    tags: ['foundational', 'pull', 'grip', 'shoulder health', 'bar', 'tendon', 'decompression']
  },
  {
    id: 'scapular-pull',
    name: 'Scapular Pull-Up',
    difficulty: 'beginner',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Lower Trapezius', 'Serratus Anterior', 'Rhomboids', 'Latissimus Dorsi (initiating fibers)'],
    prerequisites: ['dead-hang'],
    unlocks: ['pull-up', 'australian-row'],
    description: 'From a dead hang, pull shoulders down and back without bending elbows. Builds scapular control and shoulder strength. Foundation for pull-ups.',
    executionSteps: [
      'Start in full dead hang, arms completely straight.',
      'WITHOUT bending elbows, pull your shoulder blades DOWN and BACK.',
      'Your body will rise 2-4 inches purely from scapular movement.',
      'Hold for 1-2 seconds at the top of the scapular pull.',
      'Slowly return to passive dead hang — scapulae spread and elevate.',
      'Repeat — feel the squeeze of lower traps and lats at the top.'
    ],
    coachingCues: [
      'Pull your shoulder blades into your back pockets',
      'No elbow bend — this is ALL shoulder blades',
      'Think: crush your shoulder blades down and back',
      'Feel the V-shape starting — lats engaging'
    ],
    commonMistakes: [
      'Bending elbows — not isolating scapular depression',
      'Shrugging instead of depressing',
      'Too rapid — not feeling the movement'
    ],
    breathingGuide: 'Exhale on scapular depression (contraction), inhale return.',
    tempoRecommendation: '1-2-2-1: 1s up, 2s hold, 2s return',
    masteryStandards: {
      minimum: '10 clean reps, 3 sets, full range scapular motion',
      advanced: '15 reps, controlled tempo',
      elite: '3 sets x 15 — move to full pull-ups'
    },
    mobilityRequirements: ['Overhead hang capability'],
    strengthRequirements: ['30s dead hang'],
    progressions: ['pull-up'],
    regressions: ['dead-hang'],
    variations: ['Rings scapular pull', 'Wide grip scapular'],
    injuryRisks: ['Low risk — beneficial for shoulder rehabilitation'],
    scienceNotes: 'Scapular pull-ups are the most important exercise for developing the neural pattern of scapular depression that initiates proper pull-up mechanics. The lower trapezius is chronically underactivated in most people due to sedentary posture. Lower trap strength directly linked to injury-free pulling.',
    tags: ['scapular', 'shoulder health', 'pull', 'beginner', 'foundational', 'trap']
  },
  {
    id: 'australian-row',
    name: 'Australian Row (Inverted Row)',
    difficulty: 'beginner',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Latissimus Dorsi', 'Biceps Brachii', 'Rear Deltoid', 'Rhomboids', 'Mid Trapezius', 'Core'],
    prerequisites: ['dead-hang'],
    unlocks: ['pull-up', 'ring-row'],
    description: 'Horizontal pull under a low bar. Builds back strength and pulling mechanics. Base progression toward pull-ups.',
    executionSteps: [
      'Position under a low bar (hip to chest height) in supine position.',
      'Grip bar overhand, slightly wider than shoulder-width.',
      'Extend legs fully — heels on ground, body forms a straight line.',
      'Depress scapulae (scapular pull) as first movement.',
      'Pull chest toward bar by driving elbows down and back.',
      'Chest touches bar at the top — full range.',
      'Lower with control back to full arm extension.'
    ],
    coachingCues: [
      'Squeeze the bar toward your chest — not just up',
      'Lead with your chest — not your chin',
      'Body stays rigid — same as a plank but sideways',
      'Elbows drive back into your pockets',
      'Make the bar touch your chest — not your collar bone'
    ],
    commonMistakes: [
      'Hips sagging — core disengaged',
      'Pulling with chin leading (chin poking forward)',
      'Partial range — not touching chest to bar',
      'Not depressing scapulae first'
    ],
    breathingGuide: 'Inhale at bottom, exhale during pull.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: {
      minimum: '15 reps body horizontal, 3 sets',
      advanced: '20 reps, 4 sets, 3-1-2 tempo',
      elite: '25+ reps horizontal — begin pull-up training'
    },
    mobilityRequirements: ['Shoulder extension mobility adequate'],
    strengthRequirements: ['30s dead hang'],
    progressions: ['pull-up', 'ring-row'],
    regressions: ['dead-hang', 'angled body row'],
    variations: ['Underhand row (bicep emphasis)', 'Ring row', 'Feet elevated row', 'Archer row'],
    injuryRisks: ['Low risk — excellent for shoulder rehabilitation'],
    scienceNotes: 'The Australian row loads the pulling chain at 40-70% of bodyweight depending on angle. Research shows it is equally effective as pull-ups for lat and rhomboid development when volume is matched. The horizontal pull vector should be trained independently for complete back development.',
    tags: ['horizontal pull', 'beginner', 'back', 'foundational', 'pull-up progression', 'bar']
  },
  {
    id: 'pull-up',
    name: 'Pull-Up',
    difficulty: 'beginner',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Latissimus Dorsi (primary)', 'Biceps Brachii', 'Rear Deltoid', 'Lower Trapezius', 'Rhomboids', 'Brachialis', 'Core'],
    prerequisites: ['dead-hang', 'scapular-pull', 'australian-row'],
    unlocks: ['chin-up', 'wide-grip-pull-up', 'L-sit-pull-up', 'muscle-up', 'front-lever'],
    description: 'Core vertical pull with overhand grip. Lifts body from hang to chin over bar. Foundation for all advanced pulling skills.',
    executionSteps: [
      'Grip bar with pronated (overhand) grip, slightly wider than shoulder-width.',
      'Full dead hang — arms completely straight.',
      'Initiate with scapular depression — pull shoulder blades DOWN.',
      'Bend elbows and drive them DOWN toward hips — pulling chest toward bar.',
      'Continue until chin clears bar — chest ideally touches bar.',
      'Pause at top for 1 second.',
      'Lower with complete control back to full dead hang.',
      'Do NOT kip, swing, or use momentum.'
    ],
    coachingCues: [
      'Think: pull the bar to your chest, not your chin to the bar',
      'Start with shoulder blades DOWN before bending elbows',
      'Drive elbows toward your hips — not flared out',
      'Full hang at bottom — dead stop each rep',
      'Chest reaches bar = full pull-up',
      'Breathe at the bottom — not at the top'
    ],
    commonMistakes: [
      'Kipping — momentum-based, does not build true strength',
      'Not starting from dead hang — shoulder health risk',
      'Chin pull — neck straining forward instead of pulling with back',
      'Half reps — not achieving full arm extension at bottom',
      'Elbows not driving down — bicep dominant pattern',
      'Shrugging shoulders at top — upper trap dominance'
    ],
    breathingGuide: 'Exhale forcefully during pull phase. Inhale during controlled descent. Breathe at bottom position.',
    tempoRecommendation: '3-1-2-0: 3s up, 1s at top, 2s descent. Then add weight or volume when mastered.',
    masteryStandards: {
      minimum: '5 clean strict reps from dead hang, 3 sets',
      advanced: '10 strict reps, 4 sets, chest to bar',
      elite: '20 strict reps OR weighted pull-ups (+20kg) — advance to muscle-ups, front lever work'
    },
    mobilityRequirements: ['Full overhead hang capability', 'Shoulder external rotation adequate'],
    strengthRequirements: ['10 Australian rows body horizontal', '60s dead hang', '10 scapular pull-ups'],
    progressions: ['muscle-up', 'L-sit-pull-up', 'front-lever'],
    regressions: ['australian-row', 'negative-pull-up'],
    variations: ['Neutral grip', 'Underhand (chin-up)', 'Wide grip', 'Close grip', 'Mixed grip', 'Weighted', 'L-sit', 'Towel grip'],
    injuryRisks: ['Biceps tendon strain if not warmed up', 'Shoulder impingement if scapulae not depressed', 'Elbow tendinopathy from excessive volume'],
    scienceNotes: 'Pull-ups produce peak latissimus dorsi activation of approximately 117-130% MVC — the highest of any pulling exercise. Negative (eccentric) pull-ups build strength up to 1.7x faster than concentric-only training due to higher mechanical tension during the eccentric phase.',
    tags: ['foundational', 'vertical pull', 'bar', 'back', 'gateway', 'mastery']
  },
  {
    id: 'negative-pull-up',
    name: 'Negative Pull-Up',
    difficulty: 'beginner',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'eccentric',
    muscleGroups: ['Latissimus Dorsi', 'Biceps Brachii', 'Lower Trapezius', 'Core'],
    prerequisites: ['dead-hang', 'scapular-pull'],
    unlocks: ['pull-up'],
    description: 'Start at the top and slowly lower down. Builds strength through controlled eccentric tension. Fast way to develop pull-up strength.',
    executionSteps: [
      'Jump or use a box to get to chin-over-bar position.',
      'At the top, engage lats — imagine bending the bar.',
      'Begin lowering yourself with complete control.',
      'Aim for 5-8 seconds to reach full dead hang.',
      'Fight gravity the entire way down — maximum resistance.',
      'At bottom, step off or drop — do not attempt concentric yet.',
      'Reset and repeat.'
    ],
    coachingCues: [
      'Fight gravity like your life depends on it',
      '5 seconds down minimum — make it burn',
      'Engage lats the whole way — do not just fall',
      'Flex everything: abs, glutes, lats simultaneously'
    ],
    commonMistakes: [
      'Lowering too fast — losing the benefit',
      'Not engaging lats during descent',
      'Attempting concentric before ready',
      'Short eccentrics (under 3 seconds)'
    ],
    breathingGuide: 'Inhale at top, slow exhale during controlled descent.',
    tempoRecommendation: '0-0-5-3: Jump up, 5-8s descent, 3s at bottom',
    masteryStandards: {
      minimum: '5 reps x 5s eccentrics, 3 sets',
      advanced: '5 reps x 8s eccentrics',
      elite: 'Full pull-up achieved'
    },
    mobilityRequirements: ['Dead hang capability'],
    strengthRequirements: ['Dead hang 30s'],
    progressions: ['pull-up'],
    regressions: ['dead-hang', 'scapular-pull'],
    variations: ['Negative chin-up', 'Negative wide-grip', 'Weighted negative'],
    injuryRisks: ['Bicep tendon stress — do not exceed 3-4 sets of 5 reps', 'Elbow hyperextension risk if dropped at bottom'],
    scienceNotes: 'Eccentric training produces 20-60% more mechanical tension than concentric training at the same load, due to reduced inhibitory activity of Golgi tendon organs during eccentric loading. This is why negatives build strength faster for beginners who cannot yet perform full reps.',
    tags: ['eccentric', 'progression', 'beginner', 'pull', 'pull-up development']
  },
  {
    id: 'chin-up',
    name: 'Chin-Up',
    difficulty: 'beginner',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Biceps Brachii (high activation)', 'Latissimus Dorsi', 'Lower Trapezius', 'Rear Deltoid', 'Brachioradialis'],
    prerequisites: ['pull-up'],
    unlocks: ['weighted-chin-up', 'one-arm-chin-up'],
    description: 'Underhand grip pull-up. Easier than pull-ups with higher biceps activation. Builds arm and back strength.',
    executionSteps: [
      'Grip bar underhand (supinated), shoulder-width.',
      'Dead hang — arms fully straight.',
      'Initiate with scapular depression.',
      'Pull elbows toward hips — chest rises toward bar.',
      'Chin over bar or chest to bar for full range.',
      'Lower with control to full extension.'
    ],
    coachingCues: [
      'Supinate more — palms facing you completely',
      'Feel the bicep peak squeeze at the top',
      'Still lead with your chest, not your chin'
    ],
    commonMistakes: [
      'Partial grip supination',
      'Kipping for reps',
      'Not achieving full arm extension at bottom'
    ],
    breathingGuide: 'Exhale on pull, inhale on descent.',
    tempoRecommendation: '2-1-2-0',
    masteryStandards: {
      minimum: '8 clean reps, 3 sets',
      advanced: '15 reps, 4 sets',
      elite: '20+ reps or weighted, advance to one-arm progressions'
    },
    mobilityRequirements: ['Wrist supination adequate'],
    strengthRequirements: ['5 strict pull-ups'],
    progressions: ['one-arm-chin-up', 'weighted-chin-up'],
    regressions: ['negative-pull-up'],
    variations: ['Close grip chin-up', 'Wide supinated grip', 'Commando neutral spin'],
    injuryRisks: ['Bicep tendon irritation from high volume', 'Elbow flexor strain'],
    scienceNotes: 'The supinated grip places the biceps brachii at its optimal length-tension relationship, activating it at ~96% MVC versus ~64% in pull-ups. The chin-up is therefore superior for bicep hypertrophy while still developing significant lat strength.',
    tags: ['bicep', 'pull', 'underhand', 'beginner', 'arm development']
  },
  {
    id: 'muscle-up',
    name: 'Muscle-Up (Bar)',
    difficulty: 'intermediate',
    category: ['pull', 'push', 'full-body'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Latissimus Dorsi', 'Biceps Brachii', 'Pectoralis Major', 'Triceps', 'Anterior Deltoid', 'Core', 'Lower Trap'],
    prerequisites: ['pull-up', 'dip', 'australian-row'],
    unlocks: ['strict-muscle-up', 'ring-muscle-up'],
    description: 'Explosive move from below to above the bar. Combines pull-up and dip. Builds full upper-body strength and coordination.',
    executionSteps: [
      'Begin with a false grip (wrists over the bar) for easier transition.',
      'From dead hang, generate momentum with a powerful pull.',
      'Pull explosively — the goal is to get chest to bar level.',
      'At the peak of the pull, lean forward and push hands DOWN as you rotate over the bar.',
      'This is the "transition" — the most technical part.',
      'Once hips are at bar level, press into a dip to full extension.',
      'Lower back down and repeat OR drop to hang safely.'
    ],
    coachingCues: [
      'Pull to your hips, not your chin',
      'Lean forward at the top — get your center of gravity over the bar',
      'Think pull-PUSH not pull then dip as two separate movements',
      'Wrists over bar (false grip) makes transition easier',
      'The transition is technique — do not force it with strength alone'
    ],
    commonMistakes: [
      'Pulling only to chin level — not enough height',
      'Missing the transition — not leaning forward at peak',
      'Two-phase movement — stopping between pull and dip',
      'Kipping excessively without building strict strength',
      'Wrists not over bar (false grip not established)'
    ],
    breathingGuide: 'Brace before pull, exhale during transition, breathe at top.',
    tempoRecommendation: '0-0-X-1: Explosive, hold at top briefly',
    masteryStandards: {
      minimum: '3 clean muscle-ups, 3 sets',
      advanced: '8 muscle-ups, strict form, 3 sets',
      elite: '5 strict muscle-ups (no kip) OR ring muscle-ups'
    },
    mobilityRequirements: ['Full pull-up range', 'Wrist mobility for false grip', 'Good shoulder mobility'],
    strengthRequirements: ['10 strict pull-ups', '15 strict dips', '3 explosive pull-ups (chest to bar)'],
    progressions: ['strict-muscle-up', 'ring-muscle-up'],
    regressions: ['explosive-pull-up', 'chest-to-bar-pull-up'],
    variations: ['Strict muscle-up', 'Wide grip muscle-up', 'Weighted muscle-up', 'Muscle-up to L-sit', 'Ring muscle-up'],
    injuryRisks: ['Wrist strain in false grip — condition gradually', 'Shoulder strain if pulling mechanics poor'],
    scienceNotes: 'The muscle-up requires approximately 1.7x bodyweight pulling force at the transition point due to the changing moment arm. Strict muscle-ups require sustained force production throughout the full range — significantly more demanding than kipping versions.',
    tags: ['iconic', 'full-body', 'pull-push', 'bar', 'intermediate-advanced', 'skill']
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    difficulty: 'advanced',
    category: ['pull', 'isometric', 'static'],
    equipment: ['bar', 'rings'],
    movementType: 'isometric',
    muscleGroups: ['Latissimus Dorsi (primary)', 'Lower Trapezius', 'Rear Deltoid', 'Core (anti-extension)', 'Biceps', 'Teres Major'],
    prerequisites: ['pull-up', 'L-sit', 'tuck-front-lever'],
    unlocks: ['front-lever-pull', 'front-lever-raise'],
    description: 'Horizontal hold on a bar with body parallel to ground. Builds elite core and pulling strength. One of calisthenics’ hardest static skills.',
    executionSteps: [
      'Hang from bar with overhand grip.',
      'Pull into tuck position first — knees to chest.',
      'Raise hips until back is parallel to ground (tuck front lever).',
      'Gradually extend legs: one leg, then straddle, then full.',
      'Body must be perfectly horizontal — hips not sagging or piking.',
      'Arms remain straight throughout — this is the key challenge.',
      'Maintain scapular depression throughout — shoulders away from ears.',
      'Posterior pelvic tilt — round low back slightly, abs engaged maximally.'
    ],
    coachingCues: [
      'Push the bar toward your feet — do not just hang',
      'Your body is a steel beam — zero bend',
      'Hips and shoulders exactly level — parallel to floor',
      'Depress scapulae hard — pull blades to back pockets',
      'Posterior pelvic tilt — flatten your low back'
    ],
    commonMistakes: [
      'Hips dropping (piking) — reducing lever arm',
      'Hips rising — not horizontal',
      'Bent arms — making it a row instead of a lever',
      'Scapulae elevating — losing scapular control',
      'Rushing progressions — full lever without adequate base'
    ],
    breathingGuide: 'Controlled breathing. Exhale during hold — do not hold breath for long.',
    tempoRecommendation: 'Hold for time: 1-3s holds progressing to 5s, 10s, 15s+',
    masteryStandards: {
      minimum: '5 second full front lever hold, 3 sets',
      advanced: '10 second hold, 3 sets',
      elite: '15+ second hold OR front lever pull-ups'
    },
    mobilityRequirements: ['Full shoulder flexion to 180 degrees', 'Hamstring flexibility for body extension', 'Core anti-extension strength'],
    strengthRequirements: ['15 strict pull-ups', 'L-sit 30s', 'Tuck front lever 15s'],
    progressions: ['front-lever-pull', 'advanced-front-lever'],
    regressions: ['tuck-front-lever', 'straddle-front-lever', 'one-leg-front-lever'],
    variations: ['Tuck front lever', 'Advanced tuck', 'One leg', 'Straddle', 'Full', 'On rings (harder)', 'Front lever pull-ups', 'Front lever raises'],
    injuryRisks: ['HIGH risk of biceps tendon injury if rushing — must build to it gradually', 'Elbow hyperextension stress', 'Shoulder strain at the pectorals'],
    scienceNotes: 'The front lever requires the posterior shoulder and back muscles to generate a force equal to approximately 1x bodyweight in shoulder extension against a long lever arm. The biceps tendon is under high tensile load — this is why biceps tendon injuries are a known risk in front lever training. Build to it over months to years.',
    tags: ['static', 'advanced', 'bar', 'pulling', 'iconic', 'elite strength']
  },
  {
    id: 'back-lever',
    name: 'Back Lever',
    difficulty: 'advanced',
    category: ['pull', 'isometric', 'static'],
    equipment: ['bar', 'rings'],
    movementType: 'isometric',
    muscleGroups: ['Biceps Brachii', 'Anterior Deltoid', 'Pectoralis Major', 'Core (extension)', 'Lower Back'],
    prerequisites: ['pull-up', 'skin-the-cat'],
    unlocks: ['back-lever-pull'],
    description: 'Face-down horizontal hold on a bar. Easier than front lever and builds core and pulling strength. Key step in lever progression.',
    executionSteps: [
      'Begin from hang — perform skin-the-cat to German hang position.',
      'From German hang, straighten body backward.',
      'Body becomes parallel to floor, face down.',
      'Arms straight overhead, gripping bar.',
      'Engage core — prevent hyperextension of spine.',
      'Squeeze glutes — maintain body alignment.',
      'Hold position.',
      'Return by reversing the skin-the-cat.'
    ],
    coachingCues: [
      'Squeeze glutes to prevent arch',
      'Arms fully locked — this is a compression skill',
      'Body parallel to floor — not angled down',
      'Hollow slightly — engage abs even in this position'
    ],
    commonMistakes: [
      'Arching back excessively — lumbar compression',
      'Bent arms',
      'Hips dropping below parallel',
      'Rushing from tuck to full position'
    ],
    breathingGuide: 'Normal controlled breathing.',
    tempoRecommendation: 'Hold progressions: 3s to 5s to 10s to 15s+',
    masteryStandards: {
      minimum: '5 second back lever hold',
      advanced: '10 second hold',
      elite: '15s hold OR back lever pull-ups'
    },
    mobilityRequirements: ['Shoulder extension mobility', 'Hip flexor flexibility'],
    strengthRequirements: ['10 pull-ups', 'Skin-the-cat 5 reps', 'German hang 20s'],
    progressions: ['back-lever-pull'],
    regressions: ['tuck-back-lever', 'skin-the-cat'],
    variations: ['Tuck', 'Advanced tuck', 'Straddle', 'Full', 'On rings'],
    injuryRisks: ['Shoulder extension strain', 'Lower back hyperextension if glutes not engaged'],
    scienceNotes: 'The back lever requires the anterior shoulder structures (biceps, anterior deltoid, pec major) to resist shoulder extension loading. It introduces the athlete to gymnastic body positions and inverted compression holds, building body awareness required for more advanced ring skills.',
    tags: ['static', 'advanced', 'bar', 'rings', 'horizontal hold', 'gymnastic']
  },
  {
    id: 'one-arm-pull-up',
    name: 'One-Arm Pull-Up',
    difficulty: 'elite',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Latissimus Dorsi (maximal)', 'Biceps Brachii', 'Brachioradialis', 'Lower Trapezius', 'Core', 'Rotator Cuff'],
    prerequisites: ['pull-up', 'chin-up', 'archer-pull-up'],
    unlocks: ['typewriter-pull-up'],
    description: 'Ultimate one-arm pull from dead hang to chin over bar. Demands extreme strength and control. One of the rarest calisthenics skills.',
    executionSteps: [
      'One hand grips bar with false grip (wrist over).',
      'Free arm hangs or placed on wrist for assisted version.',
      'From dead hang, initiate with aggressive scapular depression.',
      'Pull explosively — drive elbow down and into hip.',
      'Body will naturally rotate slightly toward working arm (acceptable).',
      'Continue pull until chin clears bar.',
      'Lower with maximum control.'
    ],
    coachingCues: [
      'Drive your elbow to your hip — not just back',
      'False grip: let your wrist wrap over the bar',
      'Explosive initiation — it is about neurological intensity',
      'Accept the slight rotation — fight excessive rotation'
    ],
    commonMistakes: [
      'Kipping excessively',
      'Not using false grip for transition benefit',
      'Insufficient base strength'
    ],
    breathingGuide: 'Full brace, explosive exhale on pull.',
    tempoRecommendation: '0-1-5-0: Explosive pull, 1s at top, 5s controlled descent',
    masteryStandards: {
      minimum: '1 clean one-arm pull-up per side',
      advanced: '3 reps per side',
      elite: '5 reps per side, full range, controlled'
    },
    mobilityRequirements: ['One-arm hang 30s', 'Full shoulder mobility'],
    strengthRequirements: ['20 strict pull-ups', '15 archer pull-ups per side', '10 weighted pull-ups (+20kg)'],
    progressions: ['typewriter-pull-up'],
    regressions: ['archer-pull-up', 'assisted-one-arm-pull-up'],
    variations: ['Chin-up grip', 'Neutral grip', 'Towel-assisted', 'Band-assisted'],
    injuryRisks: ['VERY HIGH biceps tendon risk — train only when fully prepared', 'Elbow hyperextension risk', 'Rotator cuff strain'],
    scienceNotes: 'The one-arm pull-up requires the latissimus dorsi to generate forces equivalent to 1.5-2x bodyweight due to the eliminated counterbalance. The biceps tendon is under extreme tensile load. Preparation timeline is 2-5 years of pulling work for most athletes.',
    tags: ['elite', 'pinnacle', 'one-arm', 'pull', 'rare skill', 'mastery']
  },
  // ============ CORE MOVEMENTS ============
  {
    id: 'hollow-body',
    name: 'Hollow Body Hold',
    difficulty: 'beginner',
    category: ['core', 'isometric'],
    equipment: ['none'],
    movementType: 'isometric',
    muscleGroups: ['Rectus Abdominis', 'Transverse Abdominis', 'Hip Flexors', 'Serratus Anterior'],
    prerequisites: [],
    unlocks: ['hollow-body-rock', 'tuck-planche', 'L-sit', 'handstand'],
    description: 'Core calisthenics position with lower back flat, abs tight, and limbs extended. Builds full-body tension and foundation for all skills.',
    executionSteps: [
      'Lie supine (face up) on the floor.',
      'Press lower back firmly into the floor — eliminate the arch.',
      'Brace abs hard — posterior pelvic tilt.',
      'Lift arms overhead fully extended.',
      'Lift head and shoulders slightly off the floor.',
      'Lift legs to approximately 30-45 degrees off the floor.',
      'Point toes — legs squeezed together.',
      'Hold the position maintaining LOW BACK contact with floor.',
      'If lower back lifts off floor — raise legs higher (easier) until strength improves.'
    ],
    coachingCues: [
      'Flatten your spine into the floor — NO space under your back',
      'Squeeze everything: abs, legs, arms, glutes',
      'Your body looks like a banana — the good kind (shallow curve)',
      'Lower back ALWAYS in contact with floor',
      'Toes pointed, legs glued together'
    ],
    commonMistakes: [
      'Lower back arching off floor — losing hollow position',
      'Legs too low (too hard, compensating with lumbar)',
      'Arms not overhead (reduces challenge and specificity)',
      'Head not lifted — cervical not engaged',
      'Holding breath instead of breathing through the brace'
    ],
    breathingGuide: 'Shallow breathing while maintaining brace. Practice breathing THROUGH the tension.',
    tempoRecommendation: 'Hold for time. Start 10-15s, build to 30s, 45s, 60s+',
    masteryStandards: {
      minimum: '30 second hold, 3 sets, lower back flat throughout',
      advanced: '60 second hold, 3 sets',
      elite: '90 second hollow body, or progress to hollow rocks'
    },
    mobilityRequirements: ['Hip flexor flexibility to hold position'],
    strengthRequirements: ['None — entry level'],
    progressions: ['hollow-body-rock'],
    regressions: ['Tuck hollow (bent knees)', 'Arms at sides hollow'],
    variations: ['Hollow body rock', 'Tuck hollow', 'One-arm hollow'],
    injuryRisks: ['Low risk — highly beneficial for lower back health when performed correctly'],
    scienceNotes: 'The hollow body creates the posterior pelvic tilt and abdominal bracing pattern that is the foundation of all gymnastic body shapes. Research on gymnastic preparation consistently shows hollow body mastery correlates with faster skill acquisition in all subsequent movements.',
    tags: ['core', 'foundational', 'body tension', 'gymnastics', 'beginner', 'position']
  },
  {
    id: 'arch-body',
    name: 'Arch Body Hold',
    difficulty: 'beginner',
    category: ['core', 'isometric'],
    equipment: ['none'],
    movementType: 'isometric',
    muscleGroups: ['Erector Spinae', 'Gluteus Maximus', 'Hamstrings', 'Rear Deltoid', 'Lower Trapezius'],
    prerequisites: [],
    unlocks: ['back-lever'],
    description: 'Opposite of hollow hold. Lifts chest, arms, and legs off ground. Builds posterior chain strength for advanced skills.',
    executionSteps: [
      'Lie prone (face down) on the floor.',
      'Arms extended fully overhead.',
      'Squeeze glutes hard — protect lower back.',
      'Lift arms, head, chest, and legs simultaneously off the ground.',
      'Only midsection remains in contact with floor.',
      'Toes pointed, legs squeezed, arms fully extended.',
      'Hold the position.'
    ],
    coachingCues: [
      'Squeeze glutes first — protect your back',
      'Arms and legs as long as possible — maximize the lever',
      'Look down at the floor — neutral cervical'
    ],
    commonMistakes: [
      'Glutes not engaged — compressing lumbar spine',
      'Looking forward — neck hyperextension',
      'Arms bent or legs bent'
    ],
    breathingGuide: 'Breathe normally.',
    tempoRecommendation: 'Hold 10s to 20s to 30s+',
    masteryStandards: {
      minimum: '20 second hold, 3 sets',
      advanced: '30 second hold',
      elite: 'Progress to back lever and posterior chain skills'
    },
    mobilityRequirements: ['Shoulder flexibility for overhead reach in prone'],
    strengthRequirements: ['None'],
    progressions: ['tuck-back-lever'],
    regressions: ['Arms at sides arch hold'],
    variations: ['One-arm arch', 'One-leg arch', 'Dynamic arch'],
    injuryRisks: ['Lower back compression if glutes not engaged and duration excessive'],
    scienceNotes: 'The arch body mirrors the hollow body as a complementary posterior chain activation pattern. In gymnastics programming, hollow and arch are trained together to develop full spinal stability — preventing overuse of either posterior or anterior chain exclusively.',
    tags: ['posterior chain', 'core', 'foundational', 'beginner', 'back']
  },
  {
    id: 'plank',
    name: 'Plank',
    difficulty: 'beginner',
    category: ['core', 'isometric'],
    equipment: ['none'],
    movementType: 'isometric',
    muscleGroups: ['Transverse Abdominis', 'Rectus Abdominis', 'Obliques', 'Erector Spinae (stabilizer)', 'Glutes', 'Quads', 'Shoulders'],
    prerequisites: ['hollow-body'],
    unlocks: ['side-plank', 'push-up', 'dragon-flag', 'L-sit'],
    description: 'Static push-up hold. Builds core strength and full-body tension. Essential base for all calisthenics skills.',
    executionSteps: [
      'From push-up position — hands directly below shoulders.',
      'Full arm extension.',
      'Body forms a straight line from head to heels.',
      'Brace core: tuck pelvis slightly, engage abs.',
      'Squeeze glutes actively.',
      'Press palms into floor — protract scapulae.',
      'Breathe through the brace.',
      'Hold without any body movement.'
    ],
    coachingCues: [
      'Try to crush the floor with your hands',
      'Brace like you are about to take a punch',
      'Straight line from head to heels — no exceptions',
      'Breathe while holding tension — learn to breathe under pressure'
    ],
    commonMistakes: [
      'Hips sagging — lumbar extension',
      'Hips piking — too easy, not training real tension',
      'Head dropping',
      'Not protracting scapulae — shoulder health missed',
      'Holding breath'
    ],
    breathingGuide: 'Shallow breathing maintaining brace. Full exhale loses tension.',
    tempoRecommendation: 'Hold for time: 30s to 60s to 90s to 2 min+',
    masteryStandards: {
      minimum: '60 second plank, 3 sets, zero movement',
      advanced: '2 minute plank, or challenging variations',
      elite: 'Dragon flag territory — advance to dynamic exercises'
    },
    mobilityRequirements: ['Basic shoulder mobility', 'Hip flexor length'],
    strengthRequirements: ['Hollow body 20s'],
    progressions: ['side-plank', 'push-up', 'dragon-flag'],
    regressions: ['knee-plank', 'forearm-plank'],
    variations: ['Forearm plank', 'Side plank', 'RKC plank', 'Plank with leg lift', 'Plank with arm lift'],
    injuryRisks: ['Low if performed correctly', 'Lumbar strain if hips sag with excessive duration'],
    scienceNotes: 'The plank primarily trains transverse abdominis and erector spinae as anti-extension stabilizers. The RKC plank variant increases muscle activation by ~300% compared to standard plank by maximizing co-contraction of antagonist muscles.',
    tags: ['core', 'foundational', 'anti-extension', 'isometric', 'beginner', 'body tension']
  },
  {
    id: 'L-sit',
    name: 'L-Sit',
    difficulty: 'intermediate',
    category: ['core', 'isometric', 'static'],
    equipment: ['none', 'parallettes', 'bar', 'dip-bars'],
    movementType: 'isometric',
    muscleGroups: ['Rectus Abdominis', 'Hip Flexors (Iliopsoas, Rectus Femoris)', 'Triceps', 'Anterior Deltoid', 'Lower Trapezius', 'Serratus Anterior'],
    prerequisites: ['plank', 'hollow-body', 'push-up'],
    unlocks: ['V-sit', 'L-sit-pull-up', 'tuck-planche', 'manna'],
    description: 'Straight-arm hold with legs lifted forward. Builds core compression, hip flexor, and arm strength. Base for advanced compression skills.',
    executionSteps: [
      'On parallettes or dip bars (or fists on floor), press body up with straight arms.',
      'Depress scapulae — push shoulders down away from ears.',
      'Extend legs fully, point toes.',
      'Lift legs until they are parallel to the ground (90 degrees at hips).',
      'Maintain fully extended arms throughout.',
      'Body forms an L shape — torso vertical, legs horizontal.',
      'Hold for time.'
    ],
    coachingCues: [
      'Push down hard into the bars — the harder you push, the easier the hold',
      'Shoulders DOWN — not shrugging',
      'Point your toes and squeeze your legs together',
      'Lean slightly forward to help counterbalance legs',
      'Pull your knees to your nose — think compression'
    ],
    commonMistakes: [
      'Legs dropping below parallel',
      'Bent knees (tuck L-sit — easier)',
      'Shoulders shrugging — scapulae elevating',
      'Bent elbows',
      'Not pointing toes'
    ],
    breathingGuide: 'Controlled shallow breathing. Train breathing under compression.',
    tempoRecommendation: 'Hold for time: 5s to 10s to 15s to 20s to 30s',
    masteryStandards: {
      minimum: '10 second L-sit hold, 3 sets',
      advanced: '20 second hold, 3 sets',
      elite: '30+ second hold, or progress to V-sit'
    },
    mobilityRequirements: ['Hip flexor active strength in shortened position', 'Hamstring flexibility for leg extension'],
    strengthRequirements: ['Push-up 20 reps', 'Plank 60s', 'Hollow body 30s'],
    progressions: ['V-sit', 'manna'],
    regressions: ['Tuck L-sit', 'One-leg L-sit', 'Floor L-sit'],
    variations: ['L-sit on floor (fingers)', 'L-sit on parallettes', 'L-sit on bar', 'Straddle L-sit'],
    injuryRisks: ['Hip flexor strain from excessive volume', 'Shoulder impingement if not depressing scapulae'],
    scienceNotes: 'L-sit training develops active hip flexion strength in a range that transfers directly to running speed, jump height, and core stability. The compression position stretches hamstrings while demanding active hip flexor strength — a unique training stimulus that research shows transfers to planche progressions.',
    tags: ['static', 'core', 'compression', 'intermediate', 'hip flexor', 'skill prerequisite']
  },
  {
    id: 'dragon-flag',
    name: 'Dragon Flag',
    difficulty: 'advanced',
    category: ['core'],
    equipment: ['none', 'bar'],
    movementType: 'dynamic',
    muscleGroups: ['Rectus Abdominis', 'Transverse Abdominis', 'Obliques', 'Hip Flexors', 'Erector Spinae (stabilizer)', 'Glutes'],
    prerequisites: ['plank', 'hollow-body'],
    unlocks: ['dragon-flag-variations'],
    description: 'Full-body lever movement on a bench. Builds core, hip, and back strength. Popularized by Bruce Lee.',
    executionSteps: [
      'Lie on a bench, grip behind the head (uprights or sides).',
      'Curl into a hollow body position.',
      'Press lower back, glutes, and entire body UP off the bench.',
      'Achieve near-vertical position — balance on upper back and shoulder blades.',
      'Body remains rigid (hollow) throughout.',
      'Lower the rigid body slowly — controlled descent.',
      'Lower until just above the bench (not touching).',
      'Pull back to vertical to complete one rep.'
    ],
    coachingCues: [
      'Your body is a steel plank — zero bend at any joint',
      'Squeeze every muscle simultaneously',
      'Slow descent is the hardest part — own it',
      'Posterior tilt maintained throughout'
    ],
    commonMistakes: [
      'Hipping (bending at hips) — cheating leverage',
      'Not holding rigid throughout descent',
      'Touching bench at bottom',
      'Using momentum for the concentric phase'
    ],
    breathingGuide: 'Exhale during eccentric (lowering). Hard brace throughout.',
    tempoRecommendation: '0-1-5-0: Pull up, hold vertical 1s, 5s controlled descent',
    masteryStandards: {
      minimum: '5 clean dragon flags, 3 sets',
      advanced: '10 reps, slow tempo',
      elite: '15 reps, or single-leg dragon flag'
    },
    mobilityRequirements: ['Shoulder extension for grip position', 'Full body tension capability'],
    strengthRequirements: ['60s plank', 'Hollow body 60s'],
    progressions: ['single-leg-dragon-flag'],
    regressions: ['Negative dragon flag', 'Tuck dragon flag'],
    variations: ['Straddle', 'Single leg', 'Negative only', 'Weighted'],
    injuryRisks: ['Lower back strain if form breaks', 'Neck strain from bench contact position'],
    scienceNotes: 'The dragon flag creates an enormous anti-extension moment through the entire spinal column, demanding extraordinary co-activation of all core musculature. It provides one of the highest loads on the rectus abdominis in any bodyweight exercise.',
    tags: ['advanced', 'core', 'Bruce Lee', 'lever', 'impressive', 'strength']
  },
  // ============ DIPS ============
  {
    id: 'dip',
    name: 'Parallel Bar Dip',
    difficulty: 'beginner',
    category: ['push'],
    equipment: ['dip-bars', 'parallettes'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major (lower)', 'Triceps Brachii', 'Anterior Deltoid', 'Serratus Anterior', 'Core'],
    prerequisites: ['push-up'],
    unlocks: ['weighted-dip', 'ring-dip', 'muscle-up', 'korean-dip'],
    description: 'Vertical push on parallel bars. Builds triceps, chest, and shoulder strength. Base for muscle-ups and advanced dips.',
    executionSteps: [
      'Mount dip bars with straight arms, body vertical.',
      'Depress scapulae — pull shoulders DOWN away from ears.',
      'Slight forward lean (10-15 degrees) to engage pectorals more.',
      'Bend elbows, lower body by allowing elbows to go back.',
      'Lower until upper arm is parallel to ground (or deeper for full range).',
      'At bottom, shoulders should not internally rotate past neutral.',
      'Press back to full arm extension.',
      'At top, actively push body up and protract scapulae.'
    ],
    coachingCues: [
      'Elbows track BACK — not out to the sides',
      'Shoulders stay depressed — do not shrug into the bars',
      'Lean forward for chest, stay upright for triceps',
      'Full range: upper arm parallel to floor minimum',
      'Lockout hard at the top — triceps fully extending'
    ],
    commonMistakes: [
      'Partial range — only going 90 degrees at elbow',
      'Shoulder shrugging at top or bottom',
      'Flaring elbows to sides — shoulder impingement',
      'Not reaching full lockout',
      'Kicking legs for momentum'
    ],
    breathingGuide: 'Inhale during descent, exhale forcefully on the press.',
    tempoRecommendation: '3-1-1-0: 3s down, 1s at bottom, 1s up',
    masteryStandards: {
      minimum: '10 clean dips, 3 sets, full range',
      advanced: '20 dips, 4 sets',
      elite: '30 dips or weighted (+20kg), advance to ring dips'
    },
    mobilityRequirements: ['Shoulder extension mobility adequate', 'Wrist stability'],
    strengthRequirements: ['15 push-ups', 'Basic support hold'],
    progressions: ['weighted-dip', 'ring-dip', 'korean-dip'],
    regressions: ['Bench dip', 'Box dip', 'Band-assisted dip'],
    variations: ['Upright (tricep focused)', 'Leaning (chest focused)', 'Ring dip', 'Korean dip', 'L-sit dip', 'Weighted dip'],
    injuryRisks: ['Shoulder anterior capsule strain at bottom if too deep too fast', 'Tricep tendon irritation from high volume'],
    scienceNotes: 'Dips produce high triceps activation (~90% MVC) and pectoralis activation emphasizing lower/sternal fibers. Research shows dips combined with weighted variations produce some of the highest pushing strength gains in calisthenics athletes.',
    tags: ['foundational', 'push', 'triceps', 'dip bars', 'beginner', 'gateway']
  },
  {
    id: 'ring-support-hold',
    name: 'Ring Support Hold',
    difficulty: 'beginner',
    category: ['isometric', 'push'],
    equipment: ['rings'],
    movementType: 'isometric',
    muscleGroups: ['Triceps', 'Anterior Deltoid', 'Pectoralis Major', 'Serratus Anterior', 'All Shoulder Stabilizers', 'Core'],
    prerequisites: ['push-up', 'dip'],
    unlocks: ['ring-dip', 'ring-push-up', 'ring-muscle-up'],
    description: 'Straight-arm hold above rings. Builds stability and control. Base for all ring exercises.',
    executionSteps: [
      'Jump up and grip the rings at hip level.',
      'Press to full arm extension — shoulder height.',
      'Maintain body upright — core and glutes engaged.',
      'Rings-turned-out (RTO) at the top: internally rotate wrists so rings turn outward.',
      'Hold the position — arms straight, body stable.'
    ],
    coachingCues: [
      'Turn the rings out — biceps facing forward',
      'Shoulders DOWN — not shrugging into the rings',
      'Core tight — do not let legs swing',
      'Breathe normally — this is an endurance hold'
    ],
    commonMistakes: ['Not achieving RTO', 'Shrugging shoulders', 'Legs swinging', 'Bent elbows'],
    breathingGuide: 'Normal breathing.',
    tempoRecommendation: 'Hold 5s to 10s to 20s to 30s+',
    masteryStandards: {
      minimum: '20 second hold, RTO, 3 sets',
      advanced: '30 second hold',
      elite: '45s hold — advance to ring dips'
    },
    mobilityRequirements: ['Basic wrist rotation', 'Shoulder stability'],
    strengthRequirements: ['15 dips', '20 push-ups'],
    progressions: ['ring-dip', 'ring-push-up'],
    regressions: ['Bar support hold'],
    variations: ['RTO support', 'False grip support', 'L-sit support'],
    injuryRisks: ['Wrist strain from RTO if forced — build gradually'],
    scienceNotes: 'The ring support hold with RTO forces the shoulder into external rotation, activating the rotator cuff in a strength-end-range position. This builds the specific stabilizer strength that makes ring training beneficial for shoulder joint integrity.',
    tags: ['rings', 'beginner', 'foundational', 'isometric', 'stability', 'prerequisite']
  },
  {
    id: 'ring-dip',
    name: 'Ring Dip',
    difficulty: 'intermediate',
    category: ['push'],
    equipment: ['rings'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major', 'Triceps', 'Anterior Deltoid', 'Stabilizers (all shoulder muscles)', 'Core'],
    prerequisites: ['dip', 'ring-support-hold'],
    unlocks: ['ring-muscle-up', 'deep-ring-dip'],
    description: 'Dip performed on rings. Builds strength and stability under instability. Key step in ring training.',
    executionSteps: [
      'Mount rings in support position — rings turned out (RTO) at top.',
      'Rings at hip level, arms fully extended.',
      'Lower into dip: rings naturally drift apart — control this.',
      'At the bottom, rings are wider — arms slightly angled out.',
      'Full depth — upper arms parallel to floor.',
      'Press back to support — rings come in to parallel or turned out.',
      'Maintain core tension throughout.'
    ],
    coachingCues: [
      'Control the ring flare — do not let them pull apart uncontrollably',
      'Turn rings out at the top (RTO) — biceps face forward',
      'The instability is the training — embrace it',
      'Squeeze rings toward each other as you press'
    ],
    commonMistakes: [
      'Insufficient ring stability — attempting before ring support mastered',
      'Rings drifting completely apart — loss of control',
      'Not achieving full range',
      'Shoulder collapsing inward at bottom'
    ],
    breathingGuide: 'Inhale descend, exhale press.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: {
      minimum: '5 clean ring dips, 3 sets',
      advanced: '10 ring dips, 3 sets, full range',
      elite: '15 ring dips or weighted ring dips'
    },
    mobilityRequirements: ['Full dip mobility', 'Ring support stability'],
    strengthRequirements: ['20 bar dips', 'Ring support hold 30s'],
    progressions: ['ring-muscle-up'],
    regressions: ['bar-dip', 'band-ring-dip'],
    variations: ['Deep ring dip', 'Archer ring dip', 'Weighted ring dip', 'L-sit ring dip'],
    injuryRisks: ['Higher shoulder stress than bar dips', 'Wrist strain from RTO position'],
    scienceNotes: 'Ring dips require approximately 30-50% more stabilizer muscle activation compared to bar dips due to the unstable ring environment. The rotator cuff, serratus anterior, and all shoulder stabilizers activate at significantly higher levels.',
    tags: ['rings', 'intermediate', 'push', 'instability', 'shoulder stability']
  },
  {
    id: 'ring-muscle-up',
    name: 'Ring Muscle-Up',
    difficulty: 'advanced',
    category: ['pull', 'push', 'full-body'],
    equipment: ['rings'],
    movementType: 'dynamic',
    muscleGroups: ['Lats', 'Biceps', 'Pectoralis', 'Triceps', 'All Shoulder Stabilizers', 'Core'],
    prerequisites: ['muscle-up', 'ring-dip', 'ring-support-hold'],
    unlocks: ['ring-muscle-up-variations'],
    description: 'Muscle-up on rings using a false grip. Highly challenging due to instability. Elite ring strength and control skill.',
    executionSteps: [
      'Establish false grip on rings (wrists over rings).',
      'From hang, pull explosively — the unstable rings make this harder.',
      'Lean forward during the transition — rings drift apart slightly.',
      'Push into ring support as dip phase begins.',
      'Press to full lockout.',
      'Return with control.'
    ],
    coachingCues: [
      'False grip is essential — not optional on rings',
      'Rings will want to drift — control them',
      'Smooth transition — no hesitation at the top of the pull'
    ],
    commonMistakes: ['No false grip', 'Rings drifting uncontrollably', 'Stopping at transition'],
    breathingGuide: 'Brace, pull, breathe at top.',
    tempoRecommendation: 'Explosive through transition, controlled descent',
    masteryStandards: {
      minimum: '3 ring muscle-ups, 3 sets',
      advanced: '8 ring muscle-ups',
      elite: '10+ or slow controlled ring muscle-ups'
    },
    mobilityRequirements: ['Full ring support mobility', 'False grip wrist position'],
    strengthRequirements: ['10 bar muscle-ups', '15 ring dips', 'Ring support 30s'],
    progressions: ['strict-ring-muscle-up'],
    regressions: ['bar-muscle-up', 'ring-pull-up', 'ring-dip'],
    variations: ['Strict', 'Kipping', 'To L-sit', 'Weighted'],
    injuryRisks: ['Higher than bar due to instability', 'Wrist strain from false grip'],
    scienceNotes: 'Ring muscle-ups increase neuromuscular demand by approximately 40-60% compared to bar muscle-ups due to the 3D freedom of the ring allowing force in any direction.',
    tags: ['advanced', 'rings', 'full-body', 'iconic', 'strength', 'skill']
  },
  {
    id: 'skin-the-cat',
    name: 'Skin the Cat',
    difficulty: 'intermediate',
    category: ['pull', 'mobility'],
    equipment: ['bar', 'rings'],
    movementType: 'dynamic',
    muscleGroups: ['Lats', 'Rear Deltoid', 'Serratus Anterior', 'Teres Major', 'Shoulder Capsule (flexibility)'],
    prerequisites: ['pull-up', 'dead-hang'],
    unlocks: ['back-lever', 'german-hang'],
    description: 'Gymnastics movement into a German hang. Improves shoulder mobility and flexibility. Important for back lever and ring skills.',
    executionSteps: [
      'Hang from bar or rings in overhand grip.',
      'Tuck knees and bring them toward chest.',
      'Continue rotating — pass legs THROUGH the arms (under the bar).',
      'Allow body to rotate until in German hang (legs behind, facing away from bar).',
      'Pause in German hang — stretch the anterior shoulder.',
      'Reverse the movement: pull legs back through to return to hang.',
      'Control the return — do not just drop.'
    ],
    coachingCues: [
      'Tuck tight as you pass through — makes it much easier',
      'Go SLOWLY at first — learn the movement fully',
      'In German hang: relax the shoulders into the stretch',
      'Return with control — this is an active stretch'
    ],
    commonMistakes: ['Rushing the movement', 'Not tucking adequately', 'Overstretching shoulder — too aggressive'],
    breathingGuide: 'Normal breathing. Exhale into the German hang stretch.',
    tempoRecommendation: 'Slow and controlled throughout',
    masteryStandards: {
      minimum: '5 reps, full range, controlled, 3 sets',
      advanced: 'Straight-leg skin the cat',
      elite: 'Back lever from skin the cat'
    },
    mobilityRequirements: ['Shoulder extension mobility (develops this)', 'Core control'],
    strengthRequirements: ['5 pull-ups', '30s dead hang'],
    progressions: ['back-lever'],
    regressions: ['Tuck skin the cat only'],
    variations: ['Straight leg', 'On rings (harder)', 'Weighted'],
    injuryRisks: ['Shoulder strain if anterior shoulder is tight — progress gradually', 'Do NOT force into German hang if shoulder mobility insufficient'],
    scienceNotes: 'The German hang position creates a unique combined shoulder flexion and external rotation stretch that targets the anterior capsule and pectoralis minor. Regular skin-the-cat training significantly improves shoulder extension mobility required for back lever and transitions.',
    tags: ['mobility', 'gymnastics', 'intermediate', 'shoulder mobility', 'rings', 'bar']
  },
  {
    id: 'iron-cross',
    name: 'Iron Cross',
    difficulty: 'elite',
    category: ['isometric', 'static'],
    equipment: ['rings'],
    movementType: 'isometric',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Coracobrachialis', 'Biceps Brachii', 'Serratus Anterior', 'Core'],
    prerequisites: ['ring-support-hold', 'ring-dip', 'ring-muscle-up'],
    unlocks: ['maltese-progressions'],
    description: 'Elite ring skill with arms held straight out to the sides. Requires extreme strength and control. One of gymnastics’ hardest moves.',
    executionSteps: [
      'Mount rings from below — ring support position.',
      'Lower body slowly by extending arms outward while maintaining body vertical.',
      'Arms reach horizontal position — body forms a cross shape.',
      'Maintain erect posture — body does not sag below ring level.',
      'Hold position with maximum muscle tension.',
      'Return by pulling arms in to support position.'
    ],
    coachingCues: [
      'Arms at exactly 90 degrees to body',
      'Body vertical — do not let hips drop',
      'Maximum tension in chest and inner arms',
      'Press rings toward each other — never stop pressing'
    ],
    commonMistakes: ['Arms above horizontal (easier — not a cross)', 'Body dropping below rings', 'Bent elbows'],
    breathingGuide: 'Short controlled breaths only.',
    tempoRecommendation: 'Hold for time: 1s to 3s to 5s to 10s',
    masteryStandards: {
      minimum: '3 second iron cross hold',
      advanced: '8 second hold',
      elite: '15 second hold'
    },
    mobilityRequirements: ['Full shoulder mobility', 'Ring support experience'],
    strengthRequirements: ['20 ring dips', '15 ring muscle-ups', 'Iron cross band-assisted 10s', 'Years of ring training'],
    progressions: ['full-iron-cross', 'maltese'],
    regressions: ['Band-assisted iron cross', 'Tuck iron cross'],
    variations: ['Assisted', 'Dynamic (from support)'],
    injuryRisks: ['EXTREME shoulder risk if undertrained', 'Biceps tendon tear risk — must build to this over years', 'Rotator cuff strain'],
    scienceNotes: 'The iron cross creates moment arms on the shoulder approaching theoretical maximum for horizontal adduction exercises. Force requirements on the pectoralis and anterior deltoid approach levels that cannot be generated by most athletes without specific preparation requiring years of ring training.',
    tags: ['elite', 'rings', 'gymnastics', 'legendary', 'static', 'mastery goal']
  },
  // ============ PLANCHE ============
  {
    id: 'planche-lean',
    name: 'Planche Lean',
    difficulty: 'intermediate',
    category: ['isometric', 'push'],
    equipment: ['none', 'parallettes'],
    movementType: 'isometric',
    muscleGroups: ['Anterior Deltoid', 'Pectoralis Major', 'Serratus Anterior', 'Core', 'Triceps', 'Wrist Flexors'],
    prerequisites: ['push-up', 'pseudo-planche-push-up'],
    unlocks: ['tuck-planche'],
    description: 'Forward lean hold over the hands. Builds planche-specific shoulder strength and balance. Key planche progression.',
    executionSteps: [
      'Assume pseudo planche position (hands turned backward, beside hips).',
      'Lean body FORWARD over hands — tilt center of gravity over or past the hands.',
      'Body stays rigid — hollow body position.',
      'Hold the lean position for time.',
      'More forward = harder.'
    ],
    coachingCues: [
      'Lean forward until your shoulders are over your hands',
      'Push down hard — fight gravity',
      'Hollow throughout'
    ],
    commonMistakes: ['Insufficient forward lean', 'Breaking hollow body', 'Bending elbows'],
    breathingGuide: 'Controlled shallow breathing.',
    tempoRecommendation: 'Hold 5s to 10s to 20s to 30s',
    masteryStandards: {
      minimum: '15 second lean with shoulders over hands, 3 sets',
      advanced: '30 second lean',
      elite: 'Tuck planche'
    },
    mobilityRequirements: ['Wrist extension 90 degrees'],
    strengthRequirements: ['30 push-ups', '15 pseudo planche push-ups'],
    progressions: ['tuck-planche'],
    regressions: ['pseudo-planche-push-up'],
    variations: ['Band-assisted planche lean', 'On parallettes'],
    injuryRisks: ['Wrist loading — highest risk'],
    scienceNotes: 'The planche lean is the most efficient isolated training tool for planche strength development. It allows long-duration loading at a specific angle, building the anterior deltoid and serratus in the exact position required for planche.',
    tags: ['planche progression', 'intermediate', 'isometric', 'shoulder', 'wrist']
  },
  {
    id: 'tuck-planche',
    name: 'Tuck Planche',
    difficulty: 'intermediate',
    category: ['isometric', 'static'],
    equipment: ['none', 'parallettes'],
    movementType: 'isometric',
    muscleGroups: ['Anterior Deltoid', 'Serratus Anterior', 'Triceps', 'Core', 'Wrist Extensors', 'Pectoralis Major'],
    prerequisites: ['planche-lean', 'L-sit', 'pseudo-planche-push-up'],
    unlocks: ['advanced-tuck-planche'],
    description: 'First step toward planche. Knees tucked, back rounded, body held off ground on straight arms. Builds core and shoulder strength.',
    executionSteps: [
      'Start in pseudo planche position — lean forward.',
      'Begin lifting feet off the ground by drawing knees to chest.',
      'Hips rise slightly — posterior pelvic tilt (rounded lower back).',
      'Balance on straight arms with knees tucked to chest.',
      'Body is horizontal — not dipping or rising excessively.',
      'Push DOWN hard into floor — protract scapulae maximally.',
      'Hold.'
    ],
    coachingCues: [
      'Push the floor AWAY from you as hard as possible',
      'Round your back — posterior pelvic tilt',
      'Shoulders must be above or in front of hands',
      'Arms FULLY straight — this is a straight-arm skill'
    ],
    commonMistakes: [
      'Bent arms — using biceps instead of position',
      'Hips too high (piking)',
      'Shoulders behind hands (not enough lean)',
      'Not rounding lower back sufficiently'
    ],
    breathingGuide: 'Controlled breathing through the hold.',
    tempoRecommendation: 'Hold 2s to 5s to 8s to 10s to 15s to 30s+',
    masteryStandards: {
      minimum: '5 second tuck planche hold, 3 sets',
      advanced: '10 second hold',
      elite: '15 second hold, advance to advanced tuck'
    },
    mobilityRequirements: ['Wrist extension 90 degrees', 'Shoulder protraction strength'],
    strengthRequirements: ['Planche lean 20s', '15 pseudo planche push-ups'],
    progressions: ['advanced-tuck-planche', 'straddle-planche'],
    regressions: ['planche-lean'],
    variations: ['On parallettes', 'Band-assisted tuck planche'],
    injuryRisks: ['HIGH wrist risk', 'Elbow hyperextension if arms bent'],
    scienceNotes: 'The tuck planche reduces the moment arm significantly by drawing mass (legs) close to the shoulder. As knees extend and the body lengthens, the moment arm increases dramatically, explaining the extreme difficulty jump between tuck and advanced positions.',
    tags: ['planche', 'advanced-intermediate', 'static', 'wrist-intensive', 'straight-arm strength']
  },
  {
    id: 'straddle-planche',
    name: 'Straddle Planche',
    difficulty: 'advanced',
    category: ['isometric', 'static'],
    equipment: ['none', 'parallettes'],
    movementType: 'isometric',
    muscleGroups: ['Anterior Deltoid', 'Serratus Anterior', 'Pectoralis Major', 'Core', 'Triceps', 'Wrist Stabilizers'],
    prerequisites: ['tuck-planche'],
    unlocks: ['full-planche'],
    description: 'Planche variation with legs spread wide. Easier than full planche while keeping full-body extension. Intermediate planche progression.',
    executionSteps: [
      'From advanced tuck planche, gradually extend knees while spreading legs apart.',
      'Continue spreading legs until fully extended in straddle position.',
      'Body remains horizontal — no hip drop.',
      'Arms locked, scapulae maximally protracted.',
      'Hold.'
    ],
    coachingCues: [
      'Spread legs as wide as needed — wider is easier',
      'Body parallel to floor — check in mirror or video',
      'Push the floor through the Earth'
    ],
    commonMistakes: ['Hips dropping', 'Insufficient protrusion', 'Bent arms'],
    breathingGuide: 'Controlled.',
    tempoRecommendation: 'Hold 3s to 5s to 10s to 15s',
    masteryStandards: {
      minimum: '5s straddle planche hold',
      advanced: '10s hold',
      elite: '15s hold, advance to full planche'
    },
    mobilityRequirements: ['Hip abduction flexibility (straddle splits help)', 'Wrist extension 90 degrees'],
    strengthRequirements: ['Advanced tuck planche 10s'],
    progressions: ['full-planche'],
    regressions: ['tuck-planche'],
    variations: ['On parallettes', 'Dynamic straddle planche raises'],
    injuryRisks: ['Wrist loading', 'Shoulder stress in extreme horizontal position'],
    scienceNotes: 'The straddle planche reduces the moment arm by approximately 20-30% compared to full planche. Hip abduction flexibility directly determines how much the moment arm can be reduced — thus hip mobility training accelerates planche progression.',
    tags: ['planche', 'advanced', 'static', 'straight-arm', 'elite-intermediate']
  },
  {
    id: 'full-planche',
    name: 'Full Planche',
    difficulty: 'elite',
    category: ['isometric', 'static'],
    equipment: ['none', 'parallettes'],
    movementType: 'isometric',
    muscleGroups: ['Anterior Deltoid (maximum)', 'Serratus Anterior', 'Pectoralis Major', 'Triceps', 'Core', 'Wrist Stabilizers'],
    prerequisites: ['straddle-planche'],
    unlocks: ['planche-push-up'],
    description: 'Elite skill holding the body horizontal on straight arms. Requires extreme strength, balance, and control. One of calisthenics’ hardest moves.',
    executionSteps: [
      'From straddle planche, slowly bring legs together.',
      'Maintain perfect horizontal position throughout the transition.',
      'Legs fully extended and together — body parallel to floor.',
      'Arms straight, scapulae maximally protracted.',
      'Body in hollow position.',
      'Hold.'
    ],
    coachingCues: [
      'The hardest part is bringing the legs together — build to it',
      'Perfect horizontal — use video feedback constantly',
      'Maximum protraction — PUSH the floor away'
    ],
    commonMistakes: ['Piked position (hips too high)', 'Banana (hips too low)', 'Any bent arms'],
    breathingGuide: 'Must breathe — high CO2 risk if holding breath.',
    tempoRecommendation: 'Hold 1s to 3s to 5s to 10s+',
    masteryStandards: {
      minimum: '3 second full planche hold',
      advanced: '8 second hold',
      elite: '15s+ hold, planche push-ups'
    },
    mobilityRequirements: ['Maximum wrist extension', 'Full shoulder mobility'],
    strengthRequirements: ['Straddle planche 15s', 'Years of progressive planche training'],
    progressions: ['planche-push-up'],
    regressions: ['straddle-planche'],
    variations: ['On parallettes', 'Planche push-ups'],
    injuryRisks: ['Extremely high wrist risk', 'Shoulder anterior labrum stress', 'Elbow hyperextension if arms not locked'],
    scienceNotes: 'The full planche creates the maximum possible moment arm for the shoulder joint in a pressing exercise. Force requirements on the anterior deltoid approach 100% of maximum voluntary contraction, explaining why years of dedicated training are required.',
    tags: ['elite', 'pinnacle', 'static', 'straight-arm', 'planche', 'mastery goal']
  },
  // ============ HANDSTAND ============
  {
    id: 'wall-handstand',
    name: 'Wall Handstand',
    difficulty: 'beginner',
    category: ['isometric', 'static'],
    equipment: ['none'],
    movementType: 'isometric',
    muscleGroups: ['Anterior Deltoid', 'Triceps', 'Upper Trapezius', 'Serratus Anterior', 'Core', 'Wrist Extensors'],
    prerequisites: ['plank', 'push-up', 'hollow-body'],
    unlocks: ['chest-to-wall-handstand', 'handstand-push-up'],
    description: 'Beginner handstand against a wall. Builds shoulder strength, balance awareness, and wrist conditioning safely.',
    executionSteps: [
      'Start in plank position with feet against wall.',
      'Walk feet up the wall while walking hands toward wall.',
      'Achieve full overhead position — arms straight, body vertical.',
      'Reach with heels up the wall — aim for full extension.',
      'Press actively into floor — shrug shoulders up.',
      'Maintain hollow body — anterior pelvic tilt, abs tight.',
      'Hold for time.'
    ],
    coachingCues: [
      'Push the floor away — active shoulder press',
      'Ears between arms — not in front of them',
      'Hollow body or banana? Choose hollow',
      'Fingers spread, push with fingertips for balance fine-tuning'
    ],
    commonMistakes: [
      'Arching back (banana handstand) — common beginner error',
      'Shoulders shrugging (not enough scapular elevation)',
      'Elbows bending',
      'Hands too far from wall — forward lean'
    ],
    breathingGuide: 'Normal breathing — do not hold breath.',
    tempoRecommendation: 'Hold 10s to 20s to 30s to 60s+',
    masteryStandards: {
      minimum: '30 second wall handstand, 3 sets',
      advanced: '60 second hold',
      elite: 'Free handstand — advance from wall dependency'
    },
    mobilityRequirements: ['Shoulder overhead flexion 180 degrees', 'Wrist extension 90 degrees', 'Thoracic extension'],
    strengthRequirements: ['20 push-ups', 'Plank 60s'],
    progressions: ['chest-to-wall-handstand', 'handstand-push-up'],
    regressions: ['Pike plank hold against wall', 'Elevated pike hold'],
    variations: ['Chest-to-wall handstand', 'Back-to-wall (easier)', 'One-arm against wall (advanced)', 'Deficit handstand against wall'],
    injuryRisks: ['Wrist extension strain', 'Shoulder impingement if poor alignment'],
    scienceNotes: 'The wall handstand allows the nervous system to safely learn the inverted position and overhead load while eliminating the motor control challenge of balance. Consistent daily practice produces rapid neurological adaptation and confidence for free handstand progression.',
    tags: ['handstand', 'beginner', 'wall', 'overhead', 'foundational', 'inversion']
  },
  {
    id: 'handstand-push-up',
    name: 'Handstand Push-Up (Wall Supported)',
    difficulty: 'advanced',
    category: ['push'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Anterior Deltoid (primary)', 'Triceps', 'Upper Trapezius', 'Serratus Anterior', 'Core'],
    prerequisites: ['wall-handstand', 'pike-push-up'],
    unlocks: ['deficit-handstand-push-up', 'freestanding-handstand-push-up'],
    description: 'Inverted overhead press in a handstand. Builds extreme shoulder and pressing strength. One of the hardest bodyweight presses.',
    executionSteps: [
      'Kick up to handstand against wall, heels on wall.',
      'Hands 8-12 inches from wall.',
      'Arms fully extended, shoulders elevated.',
      'Lower head toward floor — elbows track at 45 degrees forward (not out).',
      'Touch head to floor gently.',
      'Press back to full extension.',
      'At lockout, press shoulders up maximally (scapular elevation).'
    ],
    coachingCues: [
      'Head to floor gently — not crash landing',
      'Elbows at 45 degrees — same as push-ups but inverted',
      'At lockout, PRESS shoulders toward your ears — full elevation',
      'Triangle of hands and head — make a solid base'
    ],
    commonMistakes: [
      'Head too far from hands — balance off',
      'Elbows flaring sideways',
      'Not achieving full lockout',
      'Neck compression at bottom'
    ],
    breathingGuide: 'Inhale as you lower, exhale on press. Hard brace throughout.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: {
      minimum: '5 HSPU, 3 sets, head to floor',
      advanced: '10 reps, 4 sets',
      elite: '15 reps or deficit HSPU'
    },
    mobilityRequirements: ['Full overhead shoulder mobility', 'Wrist extension 90 degrees', 'Good thoracic extension'],
    strengthRequirements: ['Wall handstand 60s', '15 pike push-ups'],
    progressions: ['deficit-handstand-push-up', 'freestanding-handstand-push-up'],
    regressions: ['pike-push-up', 'wall-handstand'],
    variations: ['Deficit HSPU', 'Freestanding HSPU', 'Kipping HSPU', 'Tiger bend HSPU'],
    injuryRisks: ['Neck compression if alignment off', 'Shoulder impingement', 'Wrist strain'],
    scienceNotes: 'Wall-supported HSPUs load the anterior deltoid at near-maximal levels (~95% MVC) due to the full overhead pressing angle against full bodyweight. Superior anterior deltoid and upper trap activation compared to standing overhead press.',
    tags: ['advanced', 'overhead press', 'inverted', 'shoulders', 'handstand', 'vertical push']
  },
  {
    id: 'freestanding-handstand',
    name: 'Freestanding Handstand',
    difficulty: 'advanced',
    category: ['isometric', 'static'],
    equipment: ['none'],
    movementType: 'isometric',
    muscleGroups: ['Anterior Deltoid', 'Serratus Anterior', 'Wrist Flexors/Extensors', 'Core', 'Triceps', 'All Shoulder Stabilizers'],
    prerequisites: ['wall-handstand', 'chest-to-wall-handstand'],
    unlocks: ['one-arm-handstand', 'freestanding-handstand-push-up'],
    description: 'Free balance handstand without wall support. Builds control, balance, and shoulder strength. Gateway to advanced skills.',
    executionSteps: [
      'Kick up from lunge position — dominant leg kicks up.',
      'Hands shoulder-width on floor, fingers spread and gripping.',
      'As feet rise, find vertical alignment by pushing with shoulder.',
      'Achieve stacked position: wrists, elbows, shoulders, hips, knees, feet.',
      'Balance maintained by finger pressure adjustments.',
      'Hollow body or straight body position.',
      'Hold — rebalance as needed with finger and wrist pressure.'
    ],
    coachingCues: [
      'Balance with your fingertips — not your wrists',
      'Think: adjust balance forward by pushing fingertips, backward by pushing wrist pads',
      'Find the stack — each segment above the one below',
      'Look between your hands — not too far forward'
    ],
    commonMistakes: [
      'Banana handstand — arching back',
      'Not using fingers for balance correction',
      'Fear of falling — holding breath, tensing everything'
    ],
    breathingGuide: 'Breathe normally — tension without breath-holding.',
    tempoRecommendation: 'Free hold. Target: 5s to 10s to 20s to 30s to 60s+',
    masteryStandards: {
      minimum: '10 second freestanding handstand',
      advanced: '30 second freestanding handstand',
      elite: '60+ second handstand, one-arm progressions'
    },
    mobilityRequirements: ['Full overhead shoulder mobility', 'Wrist mobility and strength'],
    strengthRequirements: ['Wall handstand 60s', 'HSPU 5 reps'],
    progressions: ['one-arm-handstand', 'freestanding-handstand-push-up'],
    regressions: ['wall-handstand', 'chest-to-wall-handstand'],
    variations: ['Straddle handstand', 'Piked handstand', 'Handstand walk', 'Handstand pirouette', 'Handstand on parallettes'],
    injuryRisks: ['Wrist injury from falls — learn to bail safely (tuck-roll)', 'Shoulder strain from high volume balancing'],
    scienceNotes: 'Freestanding handstand balance is primarily a neuromuscular skill — the sensorimotor system must process proprioceptive feedback from wrists and generate postural adjustments in under 200ms to maintain balance. Consistent daily practice accelerates progress exponentially due to neural pathway development.',
    tags: ['advanced', 'balance', 'handstand', 'skill', 'body control', 'freestanding']
  },
  // ============ LEGS ============
  {
    id: 'squat',
    name: 'Bodyweight Squat',
    difficulty: 'beginner',
    category: ['legs'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Adductors', 'Calves', 'Core'],
    prerequisites: [],
    unlocks: ['jump-squat', 'pistol-squat', 'deep-squat'],
    description: 'Basic lower-body movement that builds leg strength, mobility, and coordination. Foundation for advanced leg exercises.',
    executionSteps: [
      'Feet shoulder-width, toes turned out slightly (15-30 degrees).',
      'Stand tall — brace core.',
      'Push hips back and down simultaneously — not just forward.',
      'Knees track in line with toes — do not cave inward.',
      'Reach full depth — thighs at minimum parallel to ground.',
      'Drive through full foot — push the floor away.',
      'Stand to full hip extension at top.'
    ],
    coachingCues: [
      'Sit between your heels — not in front of them',
      'Knees push out — follow the toes',
      'Chest up — do not fold forward',
      'Drive through the WHOLE foot'
    ],
    commonMistakes: ['Knee caving (valgus)', 'Not reaching depth', 'Heels rising (ankle mobility)', 'Forward lean'],
    breathingGuide: 'Brace on inhale, exhale on ascent.',
    tempoRecommendation: '3-1-1-0',
    masteryStandards: {
      minimum: '20 reps, full depth, 3 sets',
      advanced: '50 reps continuous, perfect form',
      elite: 'Pistol squat progressions'
    },
    mobilityRequirements: ['Ankle dorsiflexion 15 degrees', 'Hip internal rotation', 'Thoracic extension'],
    strengthRequirements: ['None'],
    progressions: ['jump-squat', 'pistol-squat', 'bulgarian-split-squat'],
    regressions: ['Box squat', 'Elevated heel squat'],
    variations: ['Sumo squat', 'Jump squat', 'Pause squat', 'Tempo squat'],
    injuryRisks: ['Knee stress if valgus collapse', 'Ankle/knee if insufficient mobility'],
    scienceNotes: 'The squat is the fundamental human movement pattern and one of the most complex motor skills due to multi-joint coordination requirements. Research shows that deeper squats (past parallel) produce significantly higher glute and hamstring activation.',
    tags: ['foundational', 'legs', 'beginner', 'squat', 'lower body']
  },
  {
    id: 'pistol-squat',
    name: 'Pistol Squat',
    difficulty: 'advanced',
    category: ['legs'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Quadriceps (unilateral, maximum)', 'Gluteus Maximus', 'Hamstrings', 'Hip Stabilizers', 'Core', 'Ankle Stabilizers'],
    prerequisites: ['squat', 'bulgarian-split-squat'],
    unlocks: ['weighted-pistol-squat', 'shrimp-squat'],
    description: 'One-leg squat with other leg extended forward. Tests balance, mobility, and leg strength. Elite unilateral leg exercise.',
    executionSteps: [
      'Stand on one leg, free leg extended forward.',
      'Arms counterbalance forward.',
      'Sit down on single leg — control the descent completely.',
      'Free leg stays extended and parallel to ground.',
      'Reach full depth — glute to calf.',
      'Drive through full foot to stand.',
      'Control every phase — no bouncing at bottom.'
    ],
    coachingCues: [
      'Reach arms forward as you go down — counterbalance',
      'Sit INTO the squat — not just down in front',
      'Heel must stay on floor — ankle mobility critical',
      'Control the descent — do not fall to the bottom'
    ],
    commonMistakes: ['Heel lifting', 'Knee caving inward', 'Falling to bottom (no control)', 'Free leg dropping'],
    breathingGuide: 'Brace core, inhale down, exhale up.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: {
      minimum: '5 pistol squats per leg, 3 sets, full depth',
      advanced: '10 per leg, 4 sets',
      elite: '15 per leg, or weighted pistol squats'
    },
    mobilityRequirements: ['Ankle dorsiflexion 25 degrees', 'Hip flexor flexibility', 'Hip internal rotation'],
    strengthRequirements: ['30 bodyweight squats', '15 Bulgarian split squats per leg'],
    progressions: ['weighted-pistol-squat', 'shrimp-squat'],
    regressions: ['bulgarian-split-squat', 'Assisted pistol squat', 'Box pistol squat'],
    variations: ['Weighted', 'On rings (assisted)', 'Shrimp squat', 'Sissy squat', 'Cossack squat'],
    injuryRisks: ['Knee stress if valgus', 'Ankle stress if dorsiflexion limited', 'Hip flexor strain'],
    scienceNotes: 'The pistol squat loads the single-leg at approximately 95% of bodyweight. EMG studies show quadriceps activation at ~90-100% MVC at the bottom position, making it one of the highest quads loading bodyweight exercises possible.',
    tags: ['advanced', 'unilateral', 'legs', 'squat', 'strength', 'balance']
  },
  {
    id: 'human-flag',
    name: 'Human Flag',
    difficulty: 'elite',
    category: ['isometric', 'static', 'full-body'],
    equipment: ['bar'],
    movementType: 'isometric',
    muscleGroups: ['Lateral Deltoid (pushing arm)', 'Latissimus Dorsi (pulling arm)', 'Core (lateral flexion)', 'Obliques', 'Hip Abductors', 'Quadratus Lumborum'],
    prerequisites: ['pull-up', 'dip', 'push-up'],
    unlocks: ['human-flag-push-up'],
    description: 'Horizontal hold on a vertical pole. Requires extreme shoulder and core strength with push-pull control. One of calisthenics’ most advanced skills.',
    executionSteps: [
      'Grip a vertical pole — top hand overhand (push), bottom hand underhand (pull).',
      'Horizontal distance between hands: shoulder width or slightly more.',
      'Begin with bent-knee tuck position.',
      'Push with top arm while pulling with bottom arm simultaneously.',
      'Gradually extend body toward horizontal position.',
      'Full flag: body perfectly horizontal, perpendicular to pole.',
      'Hold position — core locked, every muscle firing.'
    ],
    coachingCues: [
      'Top arm PUSHES, bottom arm PULLS — both at maximum effort',
      'Body is a plank — no bending at hips or knees',
      'Head stays in line — neutral spine'
    ],
    commonMistakes: ['Body angled below horizontal', 'Hip drop', 'Bent arms', 'Insufficient push/pull force'],
    breathingGuide: 'Short controlled breaths — this is maximal effort.',
    tempoRecommendation: 'Hold for time: 2s to 5s to 10s to 15s',
    masteryStandards: {
      minimum: '5 second human flag',
      advanced: '10 second hold',
      elite: '15+ second hold OR human flag push-ups'
    },
    mobilityRequirements: ['Full shoulder mobility', 'Lateral spinal stability'],
    strengthRequirements: ['20 pull-ups', '30 dips', 'Years of progressive flag training'],
    progressions: ['human-flag-push-up'],
    regressions: ['tuck-flag', 'straddle-flag'],
    variations: ['Tuck', 'Straddle', 'Full', 'Dynamic (raises)'],
    injuryRisks: ['Shoulder strain from pushing/pulling forces', 'Lateral spine strain', 'Wrist strain on pole grip'],
    scienceNotes: 'The human flag creates lateral force vectors on the shoulder joint that are unique in athletic training — not replicable by any other common exercise. The pushing arm deltoid and the pulling arm lat must generate forces opposing gravity in a lateral plane, requiring extraordinary anti-lateral-flexion core strength.',
    tags: ['elite', 'iconic', 'static', 'lateral', 'street workout', 'spectacular']
  },
  // ============ MOBILITY ============
  {
    id: 'wrist-circles',
    name: 'Wrist CARs (Controlled Articular Rotations)',
    difficulty: 'beginner',
    category: ['mobility'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Wrist Flexors', 'Wrist Extensors', 'Forearm Muscles', 'Intrinsic Hand Muscles'],
    prerequisites: [],
    unlocks: ['wrist-push-up-conditioning'],
    description: 'Full wrist rotations under control. Improves mobility, strength, and joint health. Essential for injury prevention in calisthenics.',
    executionSteps: [
      'Hold arm straight out, make a fist.',
      'Rotate wrist through full range: up, out, down, in.',
      'Move SLOWLY — take 5-10 seconds for each full rotation.',
      'Maximize end range in every direction before moving on.',
      'Perform both clockwise and counter-clockwise.',
      'Perform loaded version: on all-fours, shifting weight over hands.'
    ],
    coachingCues: [
      'Slow is the priority — speed kills the point',
      'Move to end range then keep going further',
      'Feel every inch of the range'
    ],
    commonMistakes: ['Too fast — not gaining mobility', 'Limited range — not exploring full ROM'],
    breathingGuide: 'Normal breathing.',
    tempoRecommendation: '5-10 second full rotation, 5 reps each direction',
    masteryStandards: {
      minimum: '5 CARs each direction, daily practice',
      advanced: 'Loaded CARs with weight shift',
      elite: 'Wrist extension to 90 degrees without discomfort'
    },
    mobilityRequirements: ['None — this builds mobility'],
    strengthRequirements: ['None'],
    progressions: ['loaded-wrist-circles', 'wrist-extension-stretch'],
    regressions: ['Finger circles', 'Wrist shake-out'],
    variations: ['Loaded (on hands)', 'Active end-range holds', 'Wrist figure-8s'],
    injuryRisks: ['None when performed correctly'],
    scienceNotes: 'Controlled Articular Rotations (CARs) are based on the principle that joints must be regularly moved through their full available range under muscular control to maintain and improve mobility. Daily CARs practice for wrists directly prevents the wrist pain that commonly stops calisthenics progress.',
    tags: ['prehab', 'wrist', 'mobility', 'daily practice', 'injury prevention', 'beginner']
  },
  {
    id: 'bridge',
    name: 'Full Back Bridge',
    difficulty: 'intermediate',
    category: ['mobility'],
    equipment: ['none'],
    movementType: 'isometric',
    muscleGroups: ['Thoracic Extensors', 'Shoulder Flexors', 'Hip Extensors', 'Quadriceps', 'Wrist Extensors'],
    prerequisites: [],
    unlocks: ['bridge-push-up'],
    description: 'Full-body arch supported on hands and feet. Builds back flexibility, shoulder and hip mobility. Key gymnastics bridge skill.',
    executionSteps: [
      'Lie on back, place hands beside ears (fingers pointing toward feet).',
      'Feet flat on floor, hip-width apart.',
      'Press into hands and feet — push hips up.',
      'First, place head on floor — then push to full bridge.',
      'Straighten arms and legs as much as possible.',
      'Walk hands toward feet to increase thoracic bend.',
      'Hold — breathe into the position.'
    ],
    coachingCues: [
      'Push hands and feet through the floor',
      'Open chest to the ceiling',
      'Walk hands in gradually — do not force'
    ],
    commonMistakes: ['Lumbar-only bridge (not thoracic)', 'Knees collapsing inward', 'Insufficient shoulder mobility forcing strain'],
    breathingGuide: 'Deep breathing — the position naturally opens the chest for breathing.',
    tempoRecommendation: 'Hold 10s to 20s to 30s to 60s',
    masteryStandards: {
      minimum: '20 second comfortable bridge',
      advanced: '30s bridge, nearly straight arms',
      elite: 'Bridge push-ups, chest bridge'
    },
    mobilityRequirements: ['Adequate thoracic extension', 'Shoulder extension mobility', 'Wrist extension 90 degrees'],
    strengthRequirements: ['Basic shoulder and hip strength'],
    progressions: ['bridge-push-up'],
    regressions: ['Table top bridge', 'Hip bridge only'],
    variations: ['One-arm bridge', 'One-leg bridge', 'Bridge push-up', 'Chest-to-floor bridge'],
    injuryRisks: ['Lower back strain if thoracic mobility insufficient', 'Wrist strain', 'Shoulder strain'],
    scienceNotes: 'The back bridge is the most comprehensive test of posterior chain flexibility representing the integration of thoracic extension, shoulder extension, hip extension, and wrist extension simultaneously. Athletes who achieve clean bridges demonstrate excellent mobility across multiple joints.',
    tags: ['mobility', 'bridge', 'posterior chain', 'intermediate', 'gymnastics', 'full body stretch']
  },
  {
    id: 'manna',
    name: 'Manna',
    difficulty: 'elite',
    category: ['static', 'isometric'],
    equipment: ['none', 'parallettes'],
    movementType: 'isometric',
    muscleGroups: ['Hip Flexors (extreme)', 'Triceps', 'Anterior Deltoid', 'Serratus Anterior', 'Core (compression extreme)'],
    prerequisites: ['V-sit', 'L-sit'],
    unlocks: [],
    description: 'Elite compression hold with hands behind hips and legs near vertical. Demands extreme hip flexor and core strength. One of calisthenics’ hardest skills.',
    executionSteps: [
      'Start from V-sit position.',
      'Shift hands behind hips while maintaining leg elevation.',
      'Continue raising legs until they approach vertical.',
      'Body is now compressed with legs pointing up, hands behind hips.',
      'This requires active hip flexion strength in extreme shortened range.'
    ],
    coachingCues: [
      'This is years of V-sit and compression training',
      'Hands behind hips — this is the key difference from V-sit',
      'Maximum compression at maximum hip flexion range'
    ],
    commonMistakes: ['Insufficient hip flexion strength from V-sit work', 'Attempting too early'],
    breathingGuide: 'Very controlled — extreme compression restricts breathing.',
    tempoRecommendation: '1s to 3s to 5s to 10s hold',
    masteryStandards: {
      minimum: '3 second manna hold',
      advanced: '5 second hold',
      elite: '10 second full manna'
    },
    mobilityRequirements: ['Extreme active hip flexion', 'Hamstring flexibility near 180 degrees'],
    strengthRequirements: ['V-sit 20s', 'L-sit 60s', 'Years of compression training'],
    progressions: [],
    regressions: ['V-sit', 'Manna progressions'],
    variations: ['Straddle manna', 'Tucked manna'],
    injuryRisks: ['Hip flexor strain', 'Lumbar compression'],
    scienceNotes: 'The manna represents the peak of active flexibility combined with extreme compression strength — it requires simultaneous maximum active range AND maximum force production at that range. Few calisthenics athletes achieve this skill.',
    tags: ['elite', 'compression', 'static', 'rare', 'advanced skill', 'gymnastic']
  },
  {
    id: 'V-sit',
    name: 'V-Sit',
    difficulty: 'advanced',
    category: ['core', 'isometric', 'static'],
    equipment: ['none', 'parallettes'],
    movementType: 'isometric',
    muscleGroups: ['Hip Flexors (maximum)', 'Rectus Abdominis', 'Triceps', 'Anterior Deltoid', 'Serratus Anterior'],
    prerequisites: ['L-sit'],
    unlocks: ['manna'],
    description: 'Advanced compression hold with legs lifted above horizontal in a V shape. Builds extreme core and hip flexor strength.',
    executionSteps: [
      'Start from L-sit position.',
      'Continue pressing with arms, actively compressing hips.',
      'Raise legs above the 90 degree L-sit line.',
      'Aim for legs at 45 degrees above horizontal for a true V-sit.',
      'Lean back slightly to counterbalance.',
      'Maintain arm extension and scapular depression.',
      'Hold.'
    ],
    coachingCues: [
      'Imagine someone pulling your feet toward the ceiling',
      'Lean back to counterbalance as legs go higher',
      'Compression is the game — squeeze everything inward'
    ],
    commonMistakes: [
      'Insufficient hip flexor strength — not building enough via L-sit progressions',
      'Not leaning back appropriately',
      'Bent arms'
    ],
    breathingGuide: 'Controlled breathing, even more restricted than L-sit.',
    tempoRecommendation: 'Hold 3s to 5s to 10s to 15s+',
    masteryStandards: {
      minimum: '5 second V-sit',
      advanced: '10 second hold',
      elite: '20s hold, or manna progressions'
    },
    mobilityRequirements: ['Active hip flexion beyond 90 degrees', 'Deep hamstring flexibility'],
    strengthRequirements: ['30s L-sit'],
    progressions: ['manna'],
    regressions: ['L-sit', 'One-leg V-sit'],
    variations: ['Straddle V-sit', 'V-sit with weight'],
    injuryRisks: ['Hip flexor strain at high volumes', 'Low back if not managed properly'],
    scienceNotes: 'The V-sit requires active hip flexion beyond 90 degrees — a range that hip flexors are typically weak in due to everyday sitting postures. This creates unique neurological adaptations in the shortened range of hip flexor function.',
    tags: ['advanced', 'compression', 'core', 'static', 'hip flexor']
  }
];

// ============================================================
// ADDITIONAL EXERCISES — EXPANDED DATABASE
// ============================================================
const additionalExercises: Exercise[] = [
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    difficulty: 'intermediate',
    category: ['legs'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Hip Stabilizers'],
    prerequisites: ['squat'],
    unlocks: ['pistol-squat'],
    description: 'Rear-foot elevated single-leg squat. Builds quad, glute, and hip stability. Key progression toward pistol squats.',
    executionSteps: [
      'Stand 2-3 feet in front of a bench or chair (hip height).',
      'Reach one foot back and rest the top of the foot on the surface.',
      'Front foot flat — stance wide enough to keep knee behind toes.',
      'Lower body straight down — front knee bends, rear knee drops toward floor.',
      'Rear knee lightly touches floor at the bottom.',
      'Drive through the front heel to stand.'
    ],
    coachingCues: ['Front knee tracks over toe — do not cave in', 'Torso upright — do not fold forward', 'Drive through the HEEL of the front foot'],
    commonMistakes: ['Front knee too far forward over toes', 'Torso collapsing forward', 'Rear foot not elevated high enough'],
    breathingGuide: 'Inhale down, exhale up.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: { minimum: '10 reps per leg, 3 sets', advanced: '15 reps per leg, 4 sets', elite: 'Pistol squat ready' },
    mobilityRequirements: ['Hip flexor flexibility for rear leg position', 'Ankle dorsiflexion adequate'],
    strengthRequirements: ['20 bodyweight squats'],
    progressions: ['pistol-squat'],
    regressions: ['split-squat-rear-foot-flat', 'assisted-pistol-squat'],
    variations: ['Deficit Bulgarian (front foot elevated)', 'Weighted Bulgarian', 'Paused Bulgarian'],
    injuryRisks: ['Knee pain if valgus collapse', 'Hip flexor strain on rear leg'],
    scienceNotes: 'The Bulgarian split squat loads the working leg at approximately 85-90% of bodyweight, making it one of the highest loading unilateral exercises available without equipment. EMG studies show quad activation is equivalent to heavy barbell squats in the working leg.',
    tags: ['legs', 'unilateral', 'intermediate', 'squat', 'pistol prep']
  },
  {
    id: 'jump-squat',
    name: 'Jump Squat',
    difficulty: 'beginner',
    category: ['legs', 'plyometric'],
    equipment: ['none'],
    movementType: 'explosive',
    muscleGroups: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Core'],
    prerequisites: ['squat'],
    unlocks: ['depth-jump', 'box-jump', 'broad-jump'],
    description: 'Explosive squat that leaves the ground. Builds leg power, strength, and athletic explosiveness.',
    executionSteps: [
      'Start in athletic squat position.',
      'Descend to full squat depth with controlled speed.',
      'Explode upward from full depth — maximum intent.',
      'Leave the ground and reach maximum height.',
      'Land softly with bent knees — absorb the landing through the full range.',
      'Immediately redirect into next rep or pause to reset.'
    ],
    coachingCues: ['Maximum intent on every jump — do not go through the motions', 'Soft landing — absorb through knees and hips', 'Full squat depth before the jump'],
    commonMistakes: ['Half-depth squat before jumping', 'Hard landing with stiff knees', 'Not hitting maximum height each rep'],
    breathingGuide: 'Exhale on the jump.',
    tempoRecommendation: '2-0-X-0',
    masteryStandards: { minimum: '10 jumps, consistent height, 3 sets', advanced: '15 consecutive jumps, maximum height maintained', elite: 'Depth jumps and box jumps' },
    mobilityRequirements: ['Good ankle and knee mobility for landing absorption'],
    strengthRequirements: ['20 bodyweight squats'],
    progressions: ['depth-jump', 'box-jump'],
    regressions: ['bodyweight-squat'],
    variations: ['Tuck jump', 'Broad jump', 'Single-leg jump', 'Box jump'],
    injuryRisks: ['Knee/ankle impact from hard landing', 'Patellar tendinopathy from high volume'],
    scienceNotes: 'Jump squats train the stretch-shortening cycle (SSC) of the lower body — the elastic energy storage and release mechanism in tendons and muscles. SSC power output can be 20-40% higher than pure concentric force, explaining why trained jumpers outperform their raw strength predictions.',
    tags: ['explosive', 'power', 'plyometric', 'legs', 'beginner']
  },
  {
    id: 'toes-to-bar',
    name: 'Toes to Bar',
    difficulty: 'intermediate',
    category: ['core', 'pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Rectus Abdominis', 'Hip Flexors (Iliopsoas)', 'Latissimus Dorsi', 'Core'],
    prerequisites: ['dead-hang', 'hollow-body', 'pull-up'],
    unlocks: ['dragon-flag', 'L-sit', 'front-lever'],
    description: 'From a dead hang, lift feet to the bar without swinging. Builds core and hip flexor strength for advanced hanging skills.',
    executionSteps: [
      'Dead hang from bar, arms fully extended.',
      'Initiate with a slight posterior pelvic tilt — engage abs.',
      'Raise legs together with knees straight (or slightly bent for beginners).',
      'Continue until feet touch the bar above hands.',
      'Lower with complete control back to dead hang.',
      'No kipping or swinging momentum.'
    ],
    coachingCues: ['Posterior tilt first — hollow body before lifting', 'Lower with control — do not drop', 'Squeeze abs from the bottom of the range'],
    commonMistakes: ['Kipping with momentum — defeats the purpose', 'Bending knees excessively', 'Not reaching full range (feet not touching bar)', 'Not controlling the descent'],
    breathingGuide: 'Exhale on the raise, inhale on the controlled descent.',
    tempoRecommendation: '0-1-3-2: Raise with intent, 1s at top, 3s descent, 2s at bottom',
    masteryStandards: { minimum: '8 strict toes-to-bar, 3 sets', advanced: '12 strict reps, controlled descent', elite: 'Weighted or single-leg variations' },
    mobilityRequirements: ['Hamstring flexibility adequate for straight-leg raise', 'Hip flexor active strength'],
    strengthRequirements: ['Dead hang 60s', 'Hollow body 30s'],
    progressions: ['dragon-flag', 'L-sit'],
    regressions: ['Knee raises', 'L-sit on floor', 'Partial toes to bar'],
    variations: ['Knees to chest (easier)', 'Single leg', 'Weighted', 'L-sit hold at top'],
    injuryRisks: ['Hip flexor strain from excessive volume', 'Shoulder stress if not depressing scapulae'],
    scienceNotes: 'Toes-to-bar produces high rectus abdominis and hip flexor activation throughout the full range. The eccentric (lowering) phase under control is particularly valuable for developing the hip flexor and core eccentric strength required for front lever training.',
    tags: ['core', 'hanging', 'bar', 'hip flexor', 'intermediate']
  },
  {
    id: 'handstand-walk',
    name: 'Handstand Walk',
    difficulty: 'advanced',
    category: ['isometric', 'dynamic'],
    equipment: ['none'],
    movementType: 'dynamic',
    muscleGroups: ['All Shoulder Stabilizers', 'Wrist Stabilizers', 'Core', 'Serratus Anterior'],
    prerequisites: ['freestanding-handstand'],
    unlocks: ['handstand-pirouette'],
    description: 'Handstand movement while walking on hands. Builds balance, shoulder stability, and control. Key step toward advanced handstand skills.',
    executionSteps: [
      'Start from a stable freestanding handstand.',
      'Shift weight to one hand slightly.',
      'Move the unloaded hand forward a few inches.',
      'Shift weight back and move the other hand.',
      'Continue alternating in small controlled steps.',
      'Maintain balance throughout with finger pressure adjustments.'
    ],
    coachingCues: ['Tiny steps — do not reach far', 'Weight shift before step — not during', 'Maintain tight hollow or straight body throughout'],
    commonMistakes: ['Taking too large steps', 'Moving hands without shifting weight first', 'Losing body tension during movement'],
    breathingGuide: 'Normal breathing — do not hold breath.',
    tempoRecommendation: 'Slow controlled steps — no rushing',
    masteryStandards: { minimum: '5 hand-steps in each direction', advanced: '10 meters handstand walk', elite: '30+ meter handstand walk' },
    mobilityRequirements: ['Freestanding handstand 20+ seconds'],
    strengthRequirements: ['Freestanding handstand 20s'],
    progressions: ['handstand-pirouette'],
    regressions: ['freestanding-handstand', 'wall-handstand'],
    variations: ['Pirouette (rotational step)', 'Steps with rings', 'Handstand push-up walk'],
    injuryRisks: ['Wrist impact from falls — learn bail technique', 'Shoulder fatigue in sustained walking'],
    scienceNotes: 'Handstand walking transitions the proprioceptive challenge from static balance to dynamic balance, requiring the wrist and shoulder stabilizers to adapt to constantly changing load vectors. This trains dynamic stabilization that static holds do not develop.',
    tags: ['advanced', 'handstand', 'dynamic', 'balance', 'skill']
  },
  {
    id: 'ring-push-up',
    name: 'Ring Push-Up',
    difficulty: 'intermediate',
    category: ['push'],
    equipment: ['rings'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps', 'Serratus Anterior', 'All Shoulder Stabilizers'],
    prerequisites: ['push-up', 'ring-support-hold'],
    unlocks: ['ring-dip', 'ring-muscle-up'],
    description: 'Push-up using low gymnastic rings. Adds instability to build stabilizer strength. First step in ring training.',
    executionSteps: [
      'Set rings to just above floor level.',
      'Assume push-up position with hands in rings.',
      'Body straight from head to heels.',
      'Lower chest toward floor — rings will naturally move slightly.',
      'Control ring movement — do not let them flare excessively.',
      'Press back to full extension.',
      'At top: rings turned out (RTO) and scapulae protracted.'
    ],
    coachingCues: ['Control the ring flare throughout', 'RTO at the top — biceps forward', 'Same rigid body as floor push-up'],
    commonMistakes: ['Rings set too high — reduces difficulty and specificity', 'Not achieving RTO at top', 'Losing body tension from instability'],
    breathingGuide: 'Inhale descent, exhale press.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: { minimum: '10 ring push-ups, 3 sets', advanced: '15 reps, RTO each rep', elite: '20 reps, progress to ring dips' },
    mobilityRequirements: ['Ring support hold 20s'],
    strengthRequirements: ['20 floor push-ups', 'Ring support 15s'],
    progressions: ['ring-dip'],
    regressions: ['floor-push-up'],
    variations: ['Wide ring push-up', 'Ring push-up to RTO hold', 'Deficit ring push-up'],
    injuryRisks: ['Shoulder instability if support hold not established first'],
    scienceNotes: 'Ring push-ups produce approximately 30-40% greater pectoralis and serratus anterior activation than floor push-ups due to the continuous need to manage ring movement in 3D space. The RTO position at the top is a unique shoulder health training position not achievable in floor push-ups.',
    tags: ['rings', 'intermediate', 'push', 'stability', 'shoulder health']
  },
  {
    id: 'korean-dip',
    name: 'Korean Dip',
    difficulty: 'advanced',
    category: ['push', 'static'],
    equipment: ['bar', 'dip-bars'],
    movementType: 'dynamic',
    muscleGroups: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps', 'Shoulder External Rotators', 'Rear Deltoid'],
    prerequisites: ['dip', 'back-lever'],
    unlocks: ['impossible-dip'],
    description: 'Dip with hands behind the body on a bar. Builds deep shoulder extension strength. Used for advanced ring and lever progressions.',
    executionSteps: [
      'Stand with back to a bar at hip height.',
      'Grip bar behind back with overhand grip.',
      'Lower body by bending elbows — body goes below bar level.',
      'Extreme shoulder extension at the bottom.',
      'Press back to starting position.',
      'This places shoulder in extreme extension range — build slowly.'
    ],
    coachingCues: ['Build the shoulder extension mobility first via skin-the-cat', 'This is an extreme mobility skill — do NOT rush', 'Stop immediately if sharp shoulder pain'],
    commonMistakes: ['Attempting before shoulder extension mobility is adequate', 'Forcing range past comfortable limit'],
    breathingGuide: 'Inhale descent, exhale press.',
    tempoRecommendation: '3-1-2-0 — extremely controlled',
    masteryStandards: { minimum: '5 reps, full range, 3 sets', advanced: '10 reps', elite: 'Impossible dip progressions' },
    mobilityRequirements: ['Extreme shoulder extension mobility (build via skin-the-cat)', 'German hang 30s'],
    strengthRequirements: ['20 dips', 'Back lever 5s', 'Skin the cat 10 reps'],
    progressions: ['impossible-dip'],
    regressions: ['skin-the-cat', 'back-lever'],
    variations: ['Assisted Korean dip', 'Partial range Korean dip'],
    injuryRisks: ['HIGH shoulder anterior capsule risk if mobility insufficient', 'Bicep tendon stress at deep range'],
    scienceNotes: 'The Korean dip places the shoulder into extreme extension (120-140 degrees of shoulder extension) under load — a range that places significant tensile stress on the anterior shoulder capsule and biceps tendon. This makes mobility preparation absolutely mandatory before loading this movement.',
    tags: ['advanced', 'shoulder extension', 'rear dip', 'mobility skill', 'dip']
  },
  {
    id: 'wide-grip-pull-up',
    name: 'Wide Grip Pull-Up',
    difficulty: 'intermediate',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Latissimus Dorsi (wide)', 'Teres Major', 'Rear Deltoid', 'Biceps (reduced)'],
    prerequisites: ['pull-up'],
    unlocks: ['front-lever'],
    description: 'Wide-grip pull-up. Targets outer lats and builds back width. Reduces biceps involvement and increases difficulty.',
    executionSteps: [
      'Grip bar at 1.5-2x shoulder width.',
      'Dead hang — full arm extension.',
      'Pull elbows down and back — chest toward bar.',
      'Reach chin over bar, or ideally upper chest to bar.',
      'Lower with control to full dead hang.'
    ],
    coachingCues: ['Elbows drive DOWN and OUT — wider elbow path than standard', 'Lead with the chest — squeeze the outer lats', 'Do not sacrifice range for width'],
    commonMistakes: ['Too wide — loses pulling mechanics entirely', 'Partial range at wide grip', 'Shrugging at top'],
    breathingGuide: 'Exhale on pull, inhale on descent.',
    tempoRecommendation: '3-1-2-0',
    masteryStandards: { minimum: '8 wide pull-ups, 3 sets', advanced: '12 reps', elite: '15 reps, move to front lever prep' },
    mobilityRequirements: ['Good shoulder external rotation for wide grip'],
    strengthRequirements: ['10 standard pull-ups'],
    progressions: ['front-lever'],
    regressions: ['standard-pull-up'],
    variations: ['Ultra-wide (2x shoulder width)', 'Wide chin-up', 'Wide L-sit pull-up'],
    injuryRisks: ['Shoulder impingement if too wide for mobility', 'Bicep tendon stress from changed angle'],
    scienceNotes: 'Wide grip pull-ups increase the moment arm for latissimus dorsi recruitment by changing the arm angle at the shoulder joint. EMG research shows that grip width at 1.5x shoulder width optimizes lat activation while maintaining joint safety. Excessively wide grips (beyond 2x shoulder width) reduce force production without proportionally increasing lat activation.',
    tags: ['pull', 'back width', 'lats', 'intermediate', 'bar']
  },
  {
    id: 'typewriter-pull-up',
    name: 'Typewriter Pull-Up (Archer Pull-Up)',
    difficulty: 'advanced',
    category: ['pull'],
    equipment: ['bar'],
    movementType: 'dynamic',
    muscleGroups: ['Latissimus Dorsi (unilateral)', 'Biceps', 'Rear Deltoid', 'Core (anti-rotation)'],
    prerequisites: ['pull-up', 'wide-grip-pull-up'],
    unlocks: ['one-arm-pull-up'],
    description: 'Pull-up that shifts side to side at the top position. Builds uneven strength for one-arm pull-up progression.',
    executionSteps: [
      'Pull up to bar — chin over.',
      'At top, shift body laterally to one side.',
      'One arm extends straight while other bends further (weight on bent arm).',
      'Move back through center and to the other side.',
      'This counts as one rep — both sides.'
    ],
    coachingCues: ['Control the lateral shift — do not drop', 'Keep chin above bar throughout the movement', 'Feel the increased load on the bent arm'],
    commonMistakes: ['Dropping below bar level during lateral shift', 'Not fully extending the straight arm', 'Losing core tension during lateral movement'],
    breathingGuide: 'Hold breath briefly during lateral movement if needed.',
    tempoRecommendation: '0-0-2-0: Pull up explosively, slow lateral movement',
    masteryStandards: { minimum: '5 full typewriter reps (each side = 1 rep), 3 sets', advanced: '8 reps', elite: 'One-arm pull-up progressions' },
    mobilityRequirements: ['Full pull-up mobility plus lateral stability'],
    strengthRequirements: ['12 strict wide pull-ups'],
    progressions: ['one-arm-pull-up'],
    regressions: ['wide-grip-pull-up', 'archer-chin-up'],
    variations: ['Assisted typewriter', 'Weighted typewriter'],
    injuryRisks: ['Shoulder stress on the straight arm during lateral position', 'Elbow stress on heavily loaded arm'],
    scienceNotes: 'The typewriter pull-up loads the working arm at approximately 65-75% of bodyweight during the lateral position — a progressive asymmetric load that bridges the gap between bilateral pull-ups and true one-arm training without the full unilateral demand.',
    tags: ['advanced', 'pull', 'one-arm progression', 'bar', 'lateral']
  },
  {
    id: 'planche-push-up',
    name: 'Planche Push-Up',
    difficulty: 'elite',
    category: ['push', 'isometric'],
    equipment: ['none', 'parallettes'],
    movementType: 'dynamic',
    muscleGroups: ['Anterior Deltoid (maximum)', 'Serratus Anterior', 'Pectoralis Major', 'Triceps', 'Core'],
    prerequisites: ['full-planche'],
    unlocks: ['maltese'],
    description: 'Push-up performed in a planche position. Extremely advanced straight-arm push movement. Requires elite shoulder and core strength.',
    executionSteps: [
      'Achieve full planche position — body horizontal, arms straight.',
      'Bend elbows to lower body toward floor while MAINTAINING planche position.',
      'This is an eccentric planche — body must stay horizontal.',
      'At full elbow bend (arms 90 degrees), reverse.',
      'Press back to full planche position.',
      'Maintaining horizontal body throughout is the challenge.'
    ],
    coachingCues: ['Body stays horizontal — it does NOT drop', 'This is a planche PLUS a push — the planche position is maintained', 'Few athletes in the world can do this cleanly'],
    commonMistakes: ['Losing planche position during the push', 'Body dropping below horizontal', 'Bent arms during planche hold before the push'],
    breathingGuide: 'Exhale on press.',
    tempoRecommendation: '3-1-3-0: Extremely slow and controlled',
    masteryStandards: { minimum: '1 clean planche push-up', advanced: '3 reps', elite: '5 reps full range' },
    mobilityRequirements: ['All full planche mobility requirements'],
    strengthRequirements: ['Full planche 10+ seconds'],
    progressions: ['maltese'],
    regressions: ['full-planche', 'tuck-planche-push-up'],
    variations: ['Straddle planche push-up (easier)', 'Tuck planche push-up'],
    injuryRisks: ['Extreme wrist risk', 'Extreme shoulder anterior stress', 'Elbow hyperextension'],
    scienceNotes: 'The planche push-up may represent the highest force production demand in any upper body bodyweight exercise. Force requirements on the anterior deltoid during the lowest position can approach 120-130% of bodyweight due to the combined moment arms of the horizontal body position plus the full range of elbow flexion.',
    tags: ['elite', 'pinnacle', 'push', 'planche', 'straight-arm', 'rare']
  },
  {
    id: 'maltese',
    name: 'Maltese (Cross + Planche Position)',
    difficulty: 'elite',
    category: ['isometric', 'static'],
    equipment: ['rings'],
    movementType: 'isometric',
    muscleGroups: ['Pectoralis Major (extreme)', 'Anterior Deltoid', 'Serratus Anterior', 'Coracobrachialis', 'Biceps'],
    prerequisites: ['iron-cross', 'full-planche'],
    unlocks: [],
    description: 'Elite ring hold combining planche and iron cross positions. Body stays horizontal with arms extended wide. One of the hardest static strength skills.',
    executionSteps: [
      'From ring support, lower into iron cross position.',
      'Simultaneously shift body forward into planche-like horizontal position.',
      'Body becomes horizontal while arms are extended to sides.',
      'This requires planche-level pushing strength AND iron cross-level pulling strength simultaneously.',
      'Hold position — this is an extreme full-body maximal effort.'
    ],
    coachingCues: ['This requires years of planche AND iron cross training', 'The simultaneous horizontal body + wide arm = maximum possible demand', 'World-class gymnasts achieve this after 10+ years of training'],
    commonMistakes: ['Attempting before iron cross and planche are both mastered', 'Body not fully horizontal', 'Arms not at true horizontal position'],
    breathingGuide: 'Impossible to breathe normally — only short controlled breaths.',
    tempoRecommendation: '1-3 second holds are exceptional achievements',
    masteryStandards: { minimum: '1-2 second Maltese hold', advanced: '3-5 second hold', elite: '8+ second hold' },
    mobilityRequirements: ['All iron cross and planche mobility requirements combined'],
    strengthRequirements: ['Iron cross 10s', 'Full planche 10s', 'Extreme combined training'],
    progressions: [],
    regressions: ['iron-cross', 'full-planche'],
    variations: ['Assisted Maltese', 'Straddle Maltese (marginally easier)'],
    injuryRisks: ['EXTREME risk for all shoulder structures', 'Biceps tendon rupture risk', 'Only for highly prepared athletes'],
    scienceNotes: 'The Maltese represents perhaps the highest upper body force production demand of any static hold in athletic history. The combined moment arms of the horizontal body position AND wide arm position create extraordinary demands on every pushing and pulling structure of the shoulder simultaneously.',
    tags: ['elite', 'rings', 'gymnastic', 'legendary', 'pinnacle', 'rare skill']
  }
];

// Merge additional exercises into main array
exercises.push(...additionalExercises);

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(e => e.id === id);
};

export const getExercisesByDifficulty = (difficulty: Difficulty): Exercise[] => {
  return exercises.filter(e => e.difficulty === difficulty);
};

export const getExercisesByCategory = (category: Category): Exercise[] => {
  return exercises.filter(e => e.category.includes(category));
};

export const searchExercises = (query: string): Exercise[] => {
  const q = query.toLowerCase();
  return exercises.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.tags.some(t => t.toLowerCase().includes(q)) ||
    e.muscleGroups.some(m => m.toLowerCase().includes(q))
  );
};
