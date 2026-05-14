export interface WorkoutDay {
  name: string;
  focus: string;
  warmup: string[];
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    rest: string;
    notes: string;
  }>;
  cooldown: string[];
  duration: string;
}

export interface Program {
  id: string;
  name: string;
  level: string;
  daysPerWeek: number;
  goal: string;
  duration: string;
  description: string;
  philosophy: string;
  prerequisites: string[];
  equipment: string[];
  schedule: { [key: string]: WorkoutDay | string };
  progressionMethod: string;
  deloadProtocol: string;
  recoveryNotes: string;
}

export const programs: Program[] = [
  {
    id: 'foundation-3day',
    name: 'CALIX Foundation — 3-Day Beginner Program',
    level: 'Beginner',
    daysPerWeek: 3,
    goal: 'Build foundational strength, movement patterns, and joint health',
    duration: '8-12 weeks',
    description: 'The absolute starting point for calisthenics mastery. This program focuses on mastering the fundamental movement patterns — push, pull, core, and leg — with perfect form before adding any complexity. Every serious calisthenics athlete begins here.',
    philosophy: 'Perfection in simplicity. You cannot build a skyscraper on a weak foundation. This program builds the tendon strength, motor patterns, and body awareness that make everything else possible. Progress is measured by quality, not quantity.',
    prerequisites: ['No injuries preventing upper body or lower body work', 'Medical clearance if needed'],
    equipment: ['Pull-up bar', 'Parallel bars or dip bars', 'Floor space'],
    schedule: {
      'Monday': {
        name: 'Push + Core',
        focus: 'Horizontal pushing mechanics, core tension',
        warmup: [
          'Wrist CARs — 5 circles each direction',
          'Shoulder CARs — 5 rotations each direction',
          'Scapular circles — 10 forward, 10 backward',
          'Thoracic extension over foam roll or chair back — 30 seconds',
          'Cat-camel — 10 reps slow',
          'Incline push-up warm-up — 10 reps light'
        ],
        exercises: [
          {
            name: 'Incline Push-Up',
            sets: 3,
            reps: '10-15 reps (use incline where you can complete all reps with perfect form)',
            rest: '90 seconds',
            notes: 'Focus entirely on form: rigid body, 45-degree elbows, full range. Chest touches surface. When you reach 15 clean reps, lower the incline.'
          },
          {
            name: 'Plank Hold',
            sets: 3,
            reps: '20-40 seconds (build to 60s)',
            rest: '60 seconds',
            notes: 'Perfect hollow body position. Lower back flat, glutes squeezed, protract scapulae. Zero movement allowed. Breathe through the hold.'
          },
          {
            name: 'Hollow Body Hold',
            sets: 3,
            reps: '15-30 seconds',
            rest: '60 seconds',
            notes: 'Lower back pressed flat to floor throughout. Raise legs if lower back lifts. Legs together, toes pointed, arms overhead.'
          },
          {
            name: 'Arch Body Hold',
            sets: 3,
            reps: '15-20 seconds',
            rest: '60 seconds',
            notes: 'Squeeze glutes before lifting. Arms and legs as long as possible. Pairs with hollow body for complete spinal stability.'
          },
          {
            name: 'Diamond Push-Up (or close grip push-up)',
            sets: 3,
            reps: '5-10 reps',
            rest: '90 seconds',
            notes: 'Do on knees if needed. Builds tricep strength critical for later progressions.'
          }
        ],
        cooldown: [
          'Chest stretch (doorway or floor) — 30 seconds each side',
          'Child pose — 60 seconds',
          'Hip flexor stretch — 30 seconds each side',
          'Wrist extension stretch — 30 seconds'
        ],
        duration: '45-55 minutes'
      },
      'Wednesday': {
        name: 'Pull + Legs',
        focus: 'Vertical and horizontal pulling, lower body strength',
        warmup: [
          'Dead hang — 20 seconds passive',
          'Scapular circles — 10 each direction',
          'Shoulder circles — 10 each arm',
          'Hip circles — 10 each direction',
          'Ankle circles — 10 each direction',
          'Bodyweight squat warm-up — 10 reps light'
        ],
        exercises: [
          {
            name: 'Dead Hang',
            sets: 3,
            reps: '20-45 seconds',
            rest: '60 seconds',
            notes: 'Build to 60 seconds. This is the most important exercise in this program for joint health and tendon conditioning.'
          },
          {
            name: 'Scapular Pull-Ups',
            sets: 3,
            reps: '8-12 reps',
            rest: '60 seconds',
            notes: 'No elbow bend. Arms stay straight. Feel lower traps and lats initiating the movement. Hold 2 seconds at top.'
          },
          {
            name: 'Australian Row (Inverted Row)',
            sets: 3,
            reps: '8-15 reps',
            rest: '90 seconds',
            notes: 'Body as horizontal as possible. Chest to bar. Drive elbows toward hips. Rigid body throughout.'
          },
          {
            name: 'Bodyweight Squat',
            sets: 3,
            reps: '15-20 reps',
            rest: '90 seconds',
            notes: 'Full depth — thighs parallel or below. Knees track toes. Heels on floor. Drive through whole foot.'
          },
          {
            name: 'Split Squat (Rear Foot on Floor)',
            sets: 3,
            reps: '8-12 reps per side',
            rest: '90 seconds',
            notes: 'Front knee tracks over toe. Rear knee lightly touches floor. Builds unilateral strength for future pistol squats.'
          }
        ],
        cooldown: [
          'Lat stretch (hanging or side reach) — 30 seconds each',
          'Hip flexor stretch — 30 seconds each side',
          'Hamstring stretch — 30 seconds each side',
          'Child pose — 60 seconds'
        ],
        duration: '45-55 minutes'
      },
      'Friday': {
        name: 'Full Body + Skill Practice',
        focus: 'Integration, mobility, and skill introduction',
        warmup: [
          'Full wrist and shoulder mobility routine — 5 minutes',
          'Hip and ankle mobility — 3 minutes',
          'Light push-up and squat warm-up'
        ],
        exercises: [
          {
            name: 'Push-Up (or best progression)',
            sets: 4,
            reps: '8-15 reps',
            rest: '90 seconds',
            notes: 'Your main pushing movement. Use the hardest variation you can do with perfect form for all reps.'
          },
          {
            name: 'Negative Pull-Up or Band-Assisted Pull-Up',
            sets: 3,
            reps: '3-5 reps (5-8 second eccentrics)',
            rest: '2 minutes',
            notes: 'If you cannot do a pull-up yet — negatives are the fastest path. If you can do pull-ups, do 3-5 strict ones.'
          },
          {
            name: 'Dip (or Bench Dip)',
            sets: 3,
            reps: '8-12 reps',
            rest: '90 seconds',
            notes: 'Full range. Elbows track back. Full lockout at top. Lean forward slightly for chest engagement.'
          },
          {
            name: 'Wall Handstand',
            sets: 3,
            reps: '15-30 seconds',
            rest: '60 seconds',
            notes: 'Entry level inversion practice. Kicks up 5-10 times before holding. This begins the handstand journey.'
          },
          {
            name: 'L-Sit Progression (Tuck or Full)',
            sets: 3,
            reps: '5-10 seconds',
            rest: '60 seconds',
            notes: 'Start with tuck L-sit (knees bent). Work toward full L-sit. Most important compression skill.'
          }
        ],
        cooldown: [
          'Full upper body stretch routine — 5 minutes',
          'Full lower body stretch routine — 5 minutes',
          'Breathing and relaxation — 3 minutes'
        ],
        duration: '55-70 minutes'
      },
      'Tuesday': 'Rest or light walking — active recovery',
      'Thursday': 'Rest or mobility work — hip flexors, thoracic, shoulders',
      'Saturday': 'Optional: light skill practice, handstand kick-ups, mobility',
      'Sunday': 'Complete rest — recovery is when adaptation happens'
    },
    progressionMethod: 'When you reach the top of the rep range for all sets with perfect form, increase difficulty. Never add reps or difficulty at the cost of form quality. Increase incline push-up difficulty by lowering the surface. Increase hang time by 5 seconds per week. Add one pull-up rep every 1-2 weeks.',
    deloadProtocol: 'Every 6th week: reduce volume by 40% (fewer sets), keep intensity the same. This allows connective tissue to recover and nervous system to adapt. Never skip deload weeks.',
    recoveryNotes: 'Sleep 7-9 hours minimum. Beginners need MORE sleep than they think — growth hormone is released during sleep. Muscle soreness is expected in weeks 1-3. Joint pain is never normal — if a joint hurts (not muscles), stop and address it. Eat adequate protein (0.7-1g per lb bodyweight minimum).'
  },
  {
    id: 'skill-builder-4day',
    name: 'CALIX Skill Builder — 4-Day Intermediate Program',
    level: 'Intermediate',
    daysPerWeek: 4,
    goal: 'Build toward muscle-up, L-sit, and handstand while developing planche and lever prerequisites',
    duration: '12-16 weeks',
    description: 'For athletes who have mastered the foundational movements (10+ pull-ups, 20+ push-ups, dips, L-sit progress). This program introduces skill training, heavier loading, and more complex movement patterns.',
    philosophy: 'Skill + Strength combined. The middle ground of calisthenics where strength and skill training merge. Every workout has a skill component that requires neural freshness — always trained early in sessions.',
    prerequisites: ['10 strict pull-ups', '20 strict push-ups', '10 strict dips', 'L-sit progress (tuck L-sit 10s)', 'Wall handstand 30s'],
    equipment: ['Pull-up bar', 'Parallel bars', 'Dip bars', 'Rings (optional)', 'Parallettes (helpful)'],
    schedule: {
      'Monday': {
        name: 'Push Skills + Planche Work',
        focus: 'Planche conditioning, push strength, handstand progress',
        warmup: [
          'Wrist conditioning — 5 minutes loaded wrist circles and stretches',
          'Shoulder CARs — full rotation work',
          'Scapular mobilization — protraction/retraction work',
          'Push-up warm-up — 10 reps light'
        ],
        exercises: [
          {
            name: 'Wall Handstand (or Freestanding Kick-Up Practice)',
            sets: 5,
            reps: '30-60 seconds or 10 kick-up attempts',
            rest: '90 seconds',
            notes: 'ALWAYS train skill-type movements first when neurologically fresh. This is skill, not strength — requires focus.'
          },
          {
            name: 'Pseudo Planche Push-Up',
            sets: 4,
            reps: '8-15 reps',
            rest: '2 minutes',
            notes: 'Forward lean is crucial. Rotate hands back as far as comfortable. This is the primary planche conditioning drill.'
          },
          {
            name: 'Planche Lean Hold',
            sets: 4,
            reps: '10-20 seconds',
            rest: '2 minutes',
            notes: 'Maximum lean — shoulders over or past hands. Hollow body throughout. This directly builds planche shoulder strength.'
          },
          {
            name: 'Pike Push-Up',
            sets: 4,
            reps: '8-12 reps',
            rest: '2 minutes',
            notes: 'Hips high, head between arms at bottom. Shrug at top. Builds overhead pressing strength for HSPU.'
          },
          {
            name: 'Dip',
            sets: 3,
            reps: '12-18 reps',
            rest: '90 seconds',
            notes: 'Full range. When you hit 20 reps, add weight with a dip belt or weighted vest.'
          }
        ],
        cooldown: [
          'Wrist decompression stretches — 2 minutes',
          'Shoulder mobility work — 3 minutes',
          'Chest opener stretch — 30 seconds'
        ],
        duration: '60-75 minutes'
      },
      'Tuesday': {
        name: 'Pull Skills + Lever Work',
        focus: 'Front lever conditioning, pull strength, muscle-up preparation',
        warmup: [
          'Dead hang — 45 seconds',
          'Scapular pull-ups — 10 reps',
          'Band dislocates — 10 reps (shoulder mobility)',
          'Australian rows — 10 reps light'
        ],
        exercises: [
          {
            name: 'Tuck Front Lever Hold',
            sets: 4,
            reps: '5-10 seconds',
            rest: '2 minutes',
            notes: 'Train this first while fresh. Perfect horizontal position. Arms straight. Scapulae depressed. Progress from tuck toward advanced tuck.'
          },
          {
            name: 'Muscle-Up Negatives or Jumping Muscle-Ups',
            sets: 3,
            reps: '3-5 reps',
            rest: '2-3 minutes',
            notes: 'If you cannot muscle-up yet: jumping muscle-ups and chest-to-bar pull-ups. If you can: strict muscle-ups.'
          },
          {
            name: 'Pull-Up (weighted or L-sit)',
            sets: 4,
            reps: '6-10 reps',
            rest: '2 minutes',
            notes: 'Add weight when bodyweight pull-ups feel easy for 10 reps. L-sit pull-ups increase core demand.'
          },
          {
            name: 'Australian Row (Feet Elevated)',
            sets: 3,
            reps: '10-15 reps',
            rest: '90 seconds',
            notes: 'Elevate feet to increase difficulty. Trains horizontal pulling for complete back development.'
          },
          {
            name: 'Archer Pull-Up Negatives',
            sets: 3,
            reps: '3-5 reps per side',
            rest: '2 minutes',
            notes: 'One arm does most of the work. Builds toward one-arm pull-up. Extremely effective unilateral pulling drill.'
          }
        ],
        cooldown: [
          'Lat stretch — 30 seconds each side',
          'Bicep stretch — 30 seconds each arm',
          'Overhead shoulder stretch — 30 seconds'
        ],
        duration: '60-75 minutes'
      },
      'Thursday': {
        name: 'Handstand + Core Skills',
        focus: 'Handstand development, L-sit/V-sit progression, core skill training',
        warmup: [
          'Wrist prep — 5 minutes comprehensive',
          'Shoulder mobility — 3 minutes',
          'Pike stretch for handstand prep'
        ],
        exercises: [
          {
            name: 'Freestanding Handstand Practice',
            sets: 8,
            reps: '5-10 attempts or 10-30 second holds',
            rest: '60 seconds',
            notes: 'Most important skill session of the week. Quality over quantity. 8 sets of focused attempts builds neural patterns faster than 3 sets.'
          },
          {
            name: 'L-Sit (best progression)',
            sets: 4,
            reps: '5-15 seconds',
            rest: '90 seconds',
            notes: 'Tuck to one-leg to full L-sit progression. Absolute focus on straight arms and depressed scapulae.'
          },
          {
            name: 'Dragon Flag Negatives',
            sets: 3,
            reps: '3-5 reps (5-8s eccentrics)',
            rest: '2 minutes',
            notes: 'Builds the core strength for later dragon flags. Body must remain perfectly rigid throughout.'
          },
          {
            name: 'Handstand Push-Up (Pike or Wall)',
            sets: 4,
            reps: '5-10 reps',
            rest: '2 minutes',
            notes: 'Best pressing movement for building HSPU strength. Hips high for pike. Progress to wall HSPU when strong enough.'
          }
        ],
        cooldown: [
          'Full shoulder and wrist routine — 5 minutes',
          'Hip flexor work — for L-sit flexibility',
          'Thoracic extension — 2 minutes'
        ],
        duration: '60-70 minutes'
      },
      'Friday': {
        name: 'Legs + Mobility Full Session',
        focus: 'Leg strength, pistol squat progression, comprehensive mobility',
        warmup: [
          'Hip CARs — 5 circles each direction, each side',
          'Ankle circles and dorsiflexion work',
          'Dynamic leg swings — 10 forward/back, 10 lateral, each side'
        ],
        exercises: [
          {
            name: 'Pistol Squat Progression (Assisted, Box, or Full)',
            sets: 4,
            reps: '5-8 per leg',
            rest: '2 minutes',
            notes: 'Use assistance (rings or TRX) if needed. Box pistol squat if balance is the limiter. Full pistol squat if ready.'
          },
          {
            name: 'Bulgarian Split Squat',
            sets: 4,
            reps: '8-12 per leg',
            rest: '90 seconds',
            notes: 'Rear foot elevated. Deep front knee bend. Builds the unilateral strength for pistol squats.'
          },
          {
            name: 'Jump Squat',
            sets: 3,
            reps: '8-10 reps',
            rest: '90 seconds',
            notes: 'Explosive lower body power. Land softly with full absorption.'
          },
          {
            name: 'Bridge',
            sets: 3,
            reps: '20-40 second holds',
            rest: '60 seconds',
            notes: 'Full back bridge. Walk hands toward feet. Builds thoracic extension and shoulder mobility for all overhead work.'
          },
          {
            name: 'Skin the Cat (if rings available)',
            sets: 3,
            reps: '5 reps',
            rest: '90 seconds',
            notes: 'Builds shoulder extension mobility for back lever and all inverted ring skills.'
          }
        ],
        cooldown: [
          'Full hip mobility routine — 10 minutes',
          'Hamstring and hip flexor stretching',
          'Bridge and thoracic work — 5 minutes'
        ],
        duration: '65-80 minutes'
      },
      'Wednesday': 'Rest — active recovery or light walking',
      'Saturday': 'Optional skill play — handstand, movement exploration, animal flow',
      'Sunday': 'Complete rest'
    },
    progressionMethod: 'Skill movements progress based on quality and hold duration. Strength movements progress by reps then weight. The 5% rule: never increase volume or intensity by more than 5-10% per week. Planche: add 2-3 seconds to holds per week. Pull-ups: add 1-2 reps per week or 2.5kg weight.',
    deloadProtocol: 'Every 4th-5th week deload. Reduce volume 40-50%. Maintain frequency. Excellent time to focus on mobility and skill refinement. Do not skip deloads — overtraining is common in this stage.',
    recoveryNotes: 'At intermediate level, tendons and ligaments are under significantly higher load. Wrist, elbow, and shoulder care is critical. Any sharp joint pain requires immediate rest and investigation. Sleep quality is as important as duration. Consider contrast showers and soft tissue work for recovery.'
  },
  {
    id: 'planche-specialist',
    name: 'CALIX Planche Specialist Program',
    level: 'Advanced',
    daysPerWeek: 5,
    goal: 'Achieve full planche and planche push-ups through systematic progression',
    duration: '6-12 months minimum',
    description: 'A dedicated planche development program. Planche is one of the most demanding static skills in calisthenics, requiring years of consistent progressive training. This program treats planche development as the primary goal with all other training supporting it.',
    philosophy: 'The planche is a product of consistent, patient, progressive overload combined with wrist conditioning, scapular strengthening, and intelligent programming. There are no shortcuts. Every session adds a tiny increment that compounds over months.',
    prerequisites: ['25 push-ups', '15 pseudo planche push-ups', '10 second planche lean', 'Zero wrist pain', 'Tuck planche attempt for 1-2 seconds'],
    equipment: ['Parallettes (strongly recommended)', 'Resistance bands', 'Pull-up bar'],
    schedule: {
      'Monday': {
        name: 'Planche Focus + Push Strength',
        focus: 'Maximum planche conditioning volume',
        warmup: [
          'Wrist conditioning — 8 minutes comprehensive protocol',
          'Shoulder prehab — band pull-aparts, face pulls',
          'Scapular activation — push-up position scapular protraction holds',
          'Planche lean 30 seconds — warm-up lean'
        ],
        exercises: [
          {
            name: 'Current Planche Progression (Tuck/Advanced Tuck/Straddle)',
            sets: 5,
            reps: '3-8 second holds per set',
            rest: '2-3 minutes',
            notes: 'This is the primary skill. Fresh nervous system = best planche performance. Every set is maximum effort. Track hold times.'
          },
          {
            name: 'Planche Lean (harder than current skill level)',
            sets: 4,
            reps: '15-25 seconds',
            rest: '2 minutes',
            notes: 'Lean harder than your current planche. Builds strength slightly beyond current capacity.'
          },
          {
            name: 'Pseudo Planche Push-Up',
            sets: 5,
            reps: '8-15 reps',
            rest: '2 minutes',
            notes: 'Maximum lean version. This is the dynamic planche strength drill — most important accessory.'
          },
          {
            name: 'Scapular Push-Up (Planche Position)',
            sets: 3,
            reps: '10-15 reps',
            rest: '90 seconds',
            notes: 'In planche lean position, protract and retract scapulae. Builds serratus anterior — critical for planche.'
          },
          {
            name: 'Weighted Dip',
            sets: 4,
            reps: '6-10 reps',
            rest: '2 minutes',
            notes: 'Builds raw pushing strength. The stronger your dip, the easier planche push-ups become.'
          }
        ],
        cooldown: ['Extensive wrist decompression — 5 minutes', 'Shoulder joint decompression', 'Stretch serratus and anterior deltoid'],
        duration: '75-90 minutes'
      },
      'Tuesday': {
        name: 'Pull + Planche Antagonist',
        focus: 'Pulling strength balances the planche pushing volume',
        warmup: ['Dead hang — 60 seconds', 'Scapular pull-ups — 10 reps', 'Band dislocates — 15 reps'],
        exercises: [
          {
            name: 'Weighted Pull-Up',
            sets: 5,
            reps: '4-8 reps',
            rest: '2-3 minutes',
            notes: 'Balances the extreme pushing volume of planche training. Critical for shoulder health.'
          },
          {
            name: 'Front Lever Progression',
            sets: 4,
            reps: '3-8 second holds',
            rest: '2 minutes',
            notes: 'Trains the pulling counterpart to planche. Tuck to advanced tuck progression.'
          },
          {
            name: 'Ring Row (Weighted or Feet Elevated)',
            sets: 4,
            reps: '8-12 reps',
            rest: '90 seconds',
            notes: 'Horizontal pulling for rhomboid and mid-trap balance.'
          },
          {
            name: 'Bicep Curl (Rings or Chin-up)',
            sets: 3,
            reps: '10-15 reps',
            rest: '90 seconds',
            notes: 'Direct bicep work balances the extreme tricep/shoulder load of planche training.'
          }
        ],
        cooldown: ['Comprehensive shoulder mobility — 5 minutes', 'Bicep and lat stretch'],
        duration: '60-70 minutes'
      },
      'Wednesday': {
        name: 'Active Recovery + Mobility',
        focus: 'Wrist and shoulder joint health, mobility gains',
        warmup: ['Light movement — 5 minutes'],
        exercises: [
          {
            name: 'Wrist Rehabilitation Protocol',
            sets: 3,
            reps: '10-15 reps each exercise',
            rest: '30 seconds',
            notes: 'Wrist circles, extensions, flexions, supination/pronation. Non-negotiable for planche athletes.'
          },
          {
            name: 'Full Shoulder Mobility Routine',
            sets: 2,
            reps: '30-60 seconds each position',
            rest: '30 seconds',
            notes: 'Shoulder CARs, overhead stretch, sleeper stretch, cross-body stretch.'
          },
          {
            name: 'Bridge Work',
            sets: 3,
            reps: '30-45 seconds',
            rest: '60 seconds',
            notes: 'Full back bridge for thoracic extension — improves shoulder overhead mobility.'
          },
          {
            name: 'Hip and Lower Body Mobility',
            sets: 2,
            reps: '30-60 seconds each',
            rest: '30 seconds',
            notes: 'Hip flexor stretch, hip CARs, straddle flexibility — straddle flexibility helps straddle planche.'
          }
        ],
        cooldown: ['Yoga nidra or meditation — 10 minutes', 'Deep breathing'],
        duration: '45-60 minutes'
      },
      'Thursday': {
        name: 'Planche Volume + Leg Work',
        focus: 'Second planche session of week, lower body strength',
        warmup: ['Wrist conditioning — 5 minutes', 'Shoulder activation — 3 minutes'],
        exercises: [
          {
            name: 'Current Planche Progression',
            sets: 4,
            reps: '3-6 second holds',
            rest: '2-3 minutes',
            notes: 'Second planche session. May feel weaker than Monday. Still maximum quality.'
          },
          {
            name: 'Planche Push-Up Negatives (or full)',
            sets: 3,
            reps: '3-5 reps',
            rest: '3 minutes',
            notes: 'Advanced: if you can do planche push-up negatives from planche lean or tuck planche.'
          },
          {
            name: 'Pistol Squat Progression',
            sets: 4,
            reps: '5-8 per leg',
            rest: '2 minutes',
            notes: 'Leg work for overall athleticism. Planche athletes must not neglect legs.'
          },
          {
            name: 'Nordic Curl (Hamstring strength)',
            sets: 3,
            reps: '3-6 reps',
            rest: '2 minutes',
            notes: 'Builds posterior chain. Bodyweight hamstring strength is often undertrained in calisthenics.'
          }
        ],
        cooldown: ['Wrist decompression — 5 minutes', 'Hip and leg stretching'],
        duration: '60-75 minutes'
      },
      'Friday': {
        name: 'Core Skills + Skill Integration',
        focus: 'L-sit, handstand, and skill integration with planche prep',
        warmup: ['Full body activation — 10 minutes'],
        exercises: [
          {
            name: 'Handstand (Freestanding)',
            sets: 6,
            reps: '15-45 second attempts',
            rest: '60-90 seconds',
            notes: 'Handstand training supports planche — both require same shoulder elevation and body tension.'
          },
          {
            name: 'L-Sit or V-Sit',
            sets: 4,
            reps: '8-20 seconds',
            rest: '90 seconds',
            notes: 'Core compression skills complement planche. Improves hip flexor and tricep straight-arm strength.'
          },
          {
            name: 'Ring Muscle-Up or Bar Muscle-Up',
            sets: 3,
            reps: '3-8 reps',
            rest: '2-3 minutes',
            notes: 'Power and skill training. Maintains full-range pulling capability.'
          }
        ],
        cooldown: ['Full recovery — 10 minutes mobility'],
        duration: '55-70 minutes'
      },
      'Saturday': 'Complete rest — this is when your planche gets stronger',
      'Sunday': 'Complete rest or very light walk'
    },
    progressionMethod: 'Planche hold time is the primary metric. Add 1-2 seconds to your best hold time every 1-2 weeks. When you can hold current progression for 15 seconds across 3 sets, progress to next step. Lean harder every 2 weeks in the planche lean drill. Pseudo planche push-ups: add 1-2 reps per week.',
    deloadProtocol: 'Every 4th week: reduce planche volume by 50%. No new attempts at next progression level. Focus on technique and mobility. The planche plateau is real — most come from insufficient recovery.',
    recoveryNotes: 'Wrist health is the limiting factor for 90% of planche athletes. Any wrist pain = stop and address immediately. The wrist conditioning protocol must be done before and after every session. Sleep is your most important recovery tool. Planche training is neurologically exhausting — do not add unnecessary volume.'
  },
  {
    id: 'rings-specialist-5day',
    name: 'CALIX Rings Specialist — 5-Day Program',
    level: 'Advanced',
    daysPerWeek: 5,
    goal: 'Master ring skills: muscle-up, iron cross progression, planche on rings, ring HSPU',
    duration: '6-12 months',
    description: 'Ring training represents the pinnacle of upper body stability and strength in calisthenics. This program systematically develops ring support, ring dips, ring muscle-ups, and advanced ring holds through progressive loading and skill training.',
    philosophy: 'Rings punish weakness and reward patience. Every instability you feel is your weak stabilizers being trained. The discomfort of ring training is the adaptation signal. Embrace the wobble — control it.',
    prerequisites: ['15+ dips', '12+ pull-ups', 'Ring support hold 20s', '5 ring dips', 'Bar muscle-up'],
    equipment: ['Gymnastic rings (adjustable height)', 'Pull-up bar', 'Parallel bars or dip bars'],
    schedule: {
      'Monday': {
        name: 'Ring Push Strength',
        focus: 'Ring dips, ring push-up, ring support skill',
        warmup: [
          'Ring support hold — 30 seconds active',
          'RTO hold practice — 20 seconds',
          'Ring push-up warm-up — 5 reps light'
        ],
        exercises: [
          {
            name: 'Ring Support Hold (RTO)',
            sets: 4,
            reps: '20-40 seconds',
            rest: '90 seconds',
            notes: 'Rings turned out (RTO) at top. Shoulders depressed. Body upright. This is the non-negotiable prerequisite for all ring pushing.'
          },
          {
            name: 'Ring Dip (Full Range)',
            sets: 5,
            reps: '5-12 reps',
            rest: '2 minutes',
            notes: 'Full range. Control ring flare. RTO at top. The fundamental ring pushing movement.'
          },
          {
            name: 'Ring Push-Up (Low or High rings)',
            sets: 4,
            reps: '8-15 reps',
            rest: '90 seconds',
            notes: 'Rings low near floor — body in push-up position. Significant stability demand. Progress ring height to increase difficulty.'
          },
          {
            name: 'Ring Push-Up to RTO (Turkish Get-Up style)',
            sets: 3,
            reps: '5-8 reps',
            rest: '2 minutes',
            notes: 'At the top of each ring push-up, achieve full RTO position. Builds the shoulder stability transition.'
          },
          {
            name: 'Weighted Bar Dip',
            sets: 4,
            reps: '6-10 reps',
            rest: '2 minutes',
            notes: 'Raw strength builder for ring dip. The stronger the bar dip, the more control in ring dip.'
          }
        ],
        cooldown: ['Shoulder mobility — 5 minutes', 'Wrist decompression'],
        duration: '70-85 minutes'
      },
      'Tuesday': {
        name: 'Ring Pull + Muscle-Up',
        focus: 'Ring muscle-up, ring pull-up, false grip conditioning',
        warmup: [
          'Dead hang — 45 seconds',
          'False grip practice — 30 seconds on rings',
          'Ring row — 10 reps light'
        ],
        exercises: [
          {
            name: 'False Grip Ring Hang',
            sets: 3,
            reps: '15-30 seconds',
            rest: '60 seconds',
            notes: 'Non-negotiable for ring muscle-up. The false grip (wrist over ring) must become comfortable.'
          },
          {
            name: 'Ring Muscle-Up',
            sets: 5,
            reps: '2-5 reps',
            rest: '3 minutes',
            notes: 'Primary skill of the week. Maximum quality. False grip always. Smooth transition — no stopping.'
          },
          {
            name: 'Ring Pull-Up (Chest to Rings)',
            sets: 4,
            reps: '6-10 reps',
            rest: '2 minutes',
            notes: 'Full range — chest to rings. Rings turn in at the top of the pull. Control throughout.'
          },
          {
            name: 'Tuck Front Lever Hold (Rings)',
            sets: 3,
            reps: '5-8 second holds',
            rest: '2 minutes',
            notes: 'Front lever on rings is significantly harder than on bar due to instability. Builds comprehensive back strength.'
          }
        ],
        cooldown: ['Lat stretch', 'False grip wrist relief stretches', 'Bicep stretch'],
        duration: '65-80 minutes'
      },
      'Wednesday': 'Active recovery — mobility focus, wrist health, thoracic work',
      'Thursday': {
        name: 'Iron Cross Progression',
        focus: 'Band-assisted iron cross, cross-style shoulder work',
        warmup: ['Ring support warm-up — 30 seconds', 'Band-assisted cross practice', 'Shoulder CARs'],
        exercises: [
          {
            name: 'Band-Assisted Iron Cross Hold',
            sets: 5,
            reps: '3-8 second holds',
            rest: '3 minutes',
            notes: 'Use bands from the rings to reduce load. Bands assist from below the hands. Progress by using lighter bands over months.'
          },
          {
            name: 'Cross Fly Push-Up',
            sets: 4,
            reps: '8-12 reps',
            rest: '2 minutes',
            notes: 'Ring push-up with wider arm position approaching cross position. Builds the specific pec and deltoid strength.'
          },
          {
            name: 'Ring Row Wide Grip (Horizontal adduction)',
            sets: 4,
            reps: '10-15 reps',
            rest: '90 seconds',
            notes: 'Wide grip ring row trains the horizontal pulling muscles needed for iron cross.'
          },
          {
            name: 'Skin the Cat',
            sets: 3,
            reps: '5-8 reps',
            rest: '90 seconds',
            notes: 'Builds the shoulder extension mobility required for back lever and ring transitions.'
          }
        ],
        cooldown: ['Extensive shoulder stretching — 8 minutes', 'Bicep stretch (iron cross puts extreme load here)'],
        duration: '65-80 minutes'
      },
      'Friday': {
        name: 'Ring Handstand + L-Sit',
        focus: 'Handstand on rings (advanced), L-sit on rings, ring support combinations',
        warmup: ['Wall handstand — 30 seconds', 'Ring support — 20 seconds', 'Wrist prep — 5 minutes'],
        exercises: [
          {
            name: 'Ring Handstand (Wall or Freestanding — advanced)',
            sets: 5,
            reps: '5-20 second holds',
            rest: '2 minutes',
            notes: 'Extremely difficult — only after solid freestanding handstand. The ring instability makes this the ultimate shoulder stability test.'
          },
          {
            name: 'L-Sit on Rings',
            sets: 4,
            reps: '8-15 seconds',
            rest: '90 seconds',
            notes: 'Rings create instability in L-sit. Harder than parallettes. Legs must remain parallel to floor.'
          },
          {
            name: 'Ring Push-Up to L-Sit (Combination)',
            sets: 3,
            reps: '3-5 reps',
            rest: '2 minutes',
            notes: 'Advanced combination: push up from rings, at top, achieve L-sit position. Builds comprehensive ring mastery.'
          }
        ],
        cooldown: ['Full recovery protocol — 10 minutes'],
        duration: '60-75 minutes'
      },
      'Saturday': 'Skill play — explore new skills, work on weak points',
      'Sunday': 'Complete rest'
    },
    progressionMethod: 'Ring skill mastery is measured in hold quality and control smoothness. Iron cross progression: decrease band assistance every 2-4 weeks. Ring muscle-up: add 1 rep per week. Ring support: increase hold time by 5 seconds per week. Never rush ring progressions — the ring environment requires perfect preparation.',
    deloadProtocol: 'Every 4th-5th week: reduce ring volume 40%. Maintain bar work at full volume. Ring training is uniquely demanding on stabilizers — they need recovery time that larger muscles do not.',
    recoveryNotes: 'Ring training produces a unique combination of shoulder, wrist, and grip fatigue. Grip strength often limits ring training before muscles do — develop crushing grip through hang and ring work. Wrist pain from false grip is common — address immediately. Shoulder mobility is the long-term investment for ring longevity.'
  }
];
