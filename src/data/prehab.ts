export interface InjuryProtocol {
  id: string;
  area: string;
  icon: string;
  title: string;
  commonCauses: string[];
  earlyWarning: string[];
  prevention: string[];
  rehabilitation: string[];
  when_to_regress: string[];
  return_to_training: string[];
  exercises: Array<{ name: string; sets: string; purpose: string; }>;
  severity: 'common' | 'serious' | 'critical';
}

export const injuryProtocols: InjuryProtocol[] = [
  {
    id: 'wrist-pain',
    area: 'Wrist',
    icon: '🤜',
    title: 'Wrist Pain & Overuse',
    severity: 'common',
    commonCauses: [
      'Insufficient wrist extension mobility (below 70 degrees) for push-up demands',
      'Jumping to pseudo planche or handstand work without conditioning',
      'Too much volume too fast — tendons lag behind muscle adaptation',
      'Skipping wrist warm-up before sessions',
      'Poor push-up positioning — wrist collapse or misalignment',
      'Planche training without progressive wrist loading protocol'
    ],
    earlyWarning: [
      'Discomfort during wrist extension at the start of workouts that fades',
      'Clicking or popping in the wrist during push-up movements',
      'Wrist fatigue earlier than normal during sets',
      'Mild soreness at the base of the hand the day after training'
    ],
    prevention: [
      'Perform wrist CARs for 5 minutes before every session involving wrist loading',
      'Build wrist extension to 90+ degrees BEFORE attempting handstand or planche work',
      'Progressive loading — fist push-ups, then flat hand, then turned-out hands over weeks',
      'Never increase wrist-loading volume by more than 10% per week',
      'Strengthen wrist flexors and extensors with dedicated wrist curls and reverse curls',
      'Use parallel bars or parallettes to reduce wrist extension demands when building to full work'
    ],
    rehabilitation: [
      'Complete rest from all painful movements until no pain with daily activities',
      'Ice application 15-20 minutes x 3 daily for acute phase (first 72 hours)',
      'Gentle wrist circles — pain-free range only, gradually expanding',
      'Tendon loading protocol: Tyler Twist (rubber bar exercises) for TFCC',
      'Gradually re-introduce load starting from wall push-ups',
      'Progress very slowly — tendons take 8-12 weeks to significantly heal'
    ],
    when_to_regress: [
      'Any sharp pain during movement — immediate stop',
      'Pain that does not fade after 10 minutes of warm-up',
      'Pain interfering with daily activities (grip, lifting objects)',
      'Swelling visible in the wrist joint'
    ],
    return_to_training: [
      'Zero pain in daily activities',
      'Full wrist range of motion without pain',
      'Pain-free wrist extension loading at 25% of previous load',
      'Gradual 10% weekly load increase if pain-free',
      'Minimum 4-6 weeks from injury to return to full load'
    ],
    exercises: [
      { name: 'Wrist CARs (pain-free range only)', sets: '5 circles x 3, 2x daily', purpose: 'Maintain range and increase blood flow to joint' },
      { name: 'Prayer stretch', sets: '30s x 3, daily', purpose: 'Gentle wrist extension stretch' },
      { name: 'Reverse prayer stretch', sets: '30s x 3, daily', purpose: 'Wrist flexor flexibility' },
      { name: 'Loaded wrist extension (fingers on floor)', sets: '10 reps x 3, daily', purpose: 'Progressive tendon loading' },
      { name: 'Fist push-up (on knuckles)', sets: 'Progress from wall to floor gradually', purpose: 'Load through fist bypasses wrist extension demand' }
    ]
  },
  {
    id: 'elbow-pain',
    area: 'Elbow',
    icon: '💪',
    title: 'Elbow Pain (Golfers & Tennis Elbow, Tricep Tendon)',
    severity: 'serious',
    commonCauses: [
      'Medial epicondylitis (Golfers elbow): excessive pull-up volume, especially with pronated grip',
      'Lateral epicondylitis (Tennis elbow): overuse of wrist extensors, push-up volume',
      'Tricep tendinopathy: excessive dip volume or pushing intensity ramp-up',
      'Biceps tendon irritation: front lever training without adequate base',
      'Elbow hyperextension in straight-arm skills (planche, front lever)'
    ],
    earlyWarning: [
      'Pain on the inner or outer elbow during or after training',
      'Morning stiffness in the elbow joint',
      'Pain when gripping objects (medial) or extending wrist (lateral)',
      'Weakness in grip or pushing activities'
    ],
    prevention: [
      'Build to dip and pull-up volume gradually — never more than 10% per week',
      'Never lock elbows aggressively in straight-arm skills — maintain a micro-bend',
      'Eccentric strength training for both biceps and triceps prevents tendinopathy',
      'Reverse curls and wrist curls strengthen forearm muscles that protect elbow',
      'Balanced pushing and pulling volume — equal push and pull sets per week'
    ],
    rehabilitation: [
      'RICE protocol for acute phase: rest, ice, compression, elevation',
      'Tyler Twist exercise for lateral epicondylitis (goldenmans twist)',
      'Eccentric wrist extension for lateral epicondylitis — most evidence-supported treatment',
      'Eccentric wrist flexion for medial epicondylitis',
      'Gradual return to loading — start at 30% of previous load',
      'Consider physiotherapy for proper diagnosis before treatment'
    ],
    when_to_regress: [
      'Any pain during pulling or pushing movements',
      'Pain lasting more than 24 hours after training session',
      'Sharp pain at elbow during maximum grip force'
    ],
    return_to_training: [
      'Pain-free grip strength testing against baseline',
      'Pain-free light pushing and pulling before returning to training',
      'Minimum 4-8 weeks for tendinopathy recovery',
      'Very gradual volume return — 4 weeks of progressive re-loading'
    ],
    exercises: [
      { name: 'Tyler Twist (FlexBar exercise)', sets: '15 reps x 3, daily', purpose: 'Evidence-based eccentric treatment for lateral epicondylitis' },
      { name: 'Eccentric wrist curl', sets: '15 slow reps x 3, daily', purpose: 'Tendon loading treatment for medial epicondylitis' },
      { name: 'Reverse curl (light)', sets: '15 reps x 3, 3x weekly', purpose: 'Brachioradialis and wrist extensor strengthening' },
      { name: 'Forearm stretching', sets: '30s each direction x 3, daily', purpose: 'Tissue quality and flexibility' }
    ]
  },
  {
    id: 'shoulder-pain',
    area: 'Shoulder',
    icon: '🏋️',
    title: 'Shoulder Pain (Impingement, Rotator Cuff, Bicep Tendon)',
    severity: 'serious',
    commonCauses: [
      'Subacromial impingement: poor scapular upward rotation during overhead pressing',
      'Rotator cuff overuse: extreme planche and front lever loads without preparation',
      'Biceps tendon: front lever training without adequate base strength',
      'Anterior capsule strain: deep dip range without mobility preparation',
      'Scapular dyskinesis: poor scapular control leading to impingement',
      'Training pull-ups without first establishing scapular depression pattern'
    ],
    earlyWarning: [
      'Painful arc: pain in specific range of shoulder movement (often 60-120 degrees of flexion)',
      'Pain with overhead reaching',
      'Pain reaching behind the back',
      'Weakness in shoulder rotation movements',
      'Night pain — rolling onto the shoulder causing pain'
    ],
    prevention: [
      'Master scapular depression before every pull-up — the most important shoulder habit',
      'Balance pushing and pulling volume — never let one dominate',
      'Rotator cuff prehab: 2x weekly band external rotation work',
      'Thoracic extension mobility — kyphosis causes impingement',
      'Progressive loading of straight-arm skills — no rushing front lever',
      'Regular scapular mobility work (circles, protraction, retraction)'
    ],
    rehabilitation: [
      'Identify the painful movement pattern and eliminate it immediately',
      'Impingement: work on thoracic extension, scapular upward rotation',
      'Rotator cuff strain: rest, then progressive isometric to isotonic loading',
      'Physiotherapy assessment is strongly recommended for shoulder pain',
      'Avoid overhead pressing until pain-free overhead mobility returns',
      'Scapular stabilization exercises as foundation of return to training'
    ],
    when_to_regress: [
      'Pain during overhead reaching',
      'Pain during pull-ups or dips at any point in range',
      'Clicking with pain (not pain-free clicking) in shoulder',
      'Reduced range of motion compared to healthy shoulder'
    ],
    return_to_training: [
      'Pain-free overhead mobility',
      'Pain-free scapular CARs',
      'Pain-free Australian rows before returning to pull-ups',
      'Pain-free push-ups before returning to dips',
      'Progressive return: weeks not days'
    ],
    exercises: [
      { name: 'Scapular CARs', sets: '5 circles each direction, 2x daily', purpose: 'Joint health and mobility maintenance' },
      { name: 'Band pull-apart', sets: '20 reps x 3, 3x weekly', purpose: 'Rear deltoid and rhomboid activation' },
      { name: 'Face pull', sets: '20 reps x 3, 3x weekly', purpose: 'Rotator cuff external rotation strength' },
      { name: 'Prone Y-T-W', sets: '10 reps each position x 2, 2x weekly', purpose: 'Lower trapezius activation — most important shoulder prehab' },
      { name: 'Sleeper stretch', sets: '30-45s x 3, daily', purpose: 'Posterior capsule mobility for internal rotation' }
    ]
  },
  {
    id: 'lower-back-pain',
    area: 'Lower Back',
    icon: '🦴',
    title: 'Lower Back Pain in Calisthenics',
    severity: 'serious',
    commonCauses: [
      'Anterior pelvic tilt during plank, push-up, and handstand (most common cause)',
      'Excessive lumbar extension in handstand (banana handstand)',
      'Hip flexor tightness creating anterior tilt and lumbar compression',
      'Weak core — not maintaining neutral spine under load',
      'Dragon flag with form breakdown — bending at hips',
      'Overextension in bridge without adequate thoracic mobility'
    ],
    earlyWarning: [
      'Tightness in lower back after sessions',
      'Morning stiffness in lumbar region',
      'Pain that radiates into glute or leg (possible disc involvement — see doctor)',
      'Pain specifically with flexion or extension of the spine'
    ],
    prevention: [
      'Master posterior pelvic tilt and hollow body before heavy skill loading',
      'Stretch hip flexors daily — tight hip flexors directly cause lumbar compression',
      'Strengthen glutes — weak glutes lead to lumbar compensation',
      'Core strength: build plank and hollow body before dragon flag and handstand',
      'In handstand: posterior pelvic tilt (hollow, not banana) protects lower back',
      'In bridge: prioritize thoracic extension, not lumbar hyperextension'
    ],
    rehabilitation: [
      'For acute non-specific low back pain: gentle movement is better than bed rest',
      'Cat-camel exercise for spinal mobility and pain relief',
      'McKenzie extension exercises if flexion-based pain',
      'Dead bug exercise for core activation without spine loading',
      'Walking is highly therapeutic for acute low back pain',
      'See a physiotherapist or sports medicine doctor for any radiating pain'
    ],
    when_to_regress: [
      'Pain radiating into the leg (see doctor — potential disc issue)',
      'Numbness or tingling',
      'Pain lasting more than 2 weeks despite rest',
      'Pain worse in morning (inflammatory markers — see doctor)'
    ],
    return_to_training: [
      'Pain-free daily activities',
      'Pain-free plank hold',
      'Pain-free hollow body hold',
      'Gradual return: plank → push-up → more complex movements'
    ],
    exercises: [
      { name: 'Dead bug', sets: '10 reps x 3, daily', purpose: 'Core activation with zero lumbar loading' },
      { name: 'Cat-camel', sets: '10 slow reps x 2, daily', purpose: 'Spinal mobility and pain relief' },
      { name: 'Glute bridge', sets: '15 reps x 3, daily', purpose: 'Glute activation reducing lumbar compensation' },
      { name: 'Hip flexor stretch (active)', sets: '45s x 3, daily', purpose: 'Reduces lumbar compression from tight hip flexors' },
      { name: 'Bird-dog', sets: '10 each side x 3, daily', purpose: 'Core stability and motor control' }
    ]
  },
  {
    id: 'hip-flexor-pain',
    area: 'Hip Flexor',
    icon: '🦵',
    title: 'Hip Flexor Strain & L-Sit Pain',
    severity: 'common',
    commonCauses: [
      'Too much L-sit volume too fast — hip flexors fatigue rapidly in compression',
      'Weakness of hip flexors in shortened range (active insufficiency)',
      'Inadequate warm-up before compression training',
      'Jumping from tuck to full L-sit without strength base'
    ],
    earlyWarning: [
      'Cramping sensation in hip flexor during L-sit holds',
      'Sharp pain at the front of the hip during leg lifting',
      'Tightness or deep aching in front of hip after training',
      'Weakness when attempting to raise legs'
    ],
    prevention: [
      'Build L-sit progressively: floor tuck → one-leg → full',
      'Warm up hip flexors with leg lifts before L-sit work',
      'Stretch hip flexors after every compression training session',
      'Include active hip flexor strengthening: leg raises, hollow body'
    ],
    rehabilitation: [
      'Rest from L-sit and leg raise work for 1-2 weeks',
      'Gentle hip flexor stretching (passive)',
      'Active hip flexor work at reduced range',
      'Gradual return to compression holds with shorter duration'
    ],
    when_to_regress: ['Any sharp hip pain during leg lifting', 'Deep aching that persists 24+ hours'],
    return_to_training: ['Pain-free straight leg raise', 'Gradual reintroduction of L-sit hold'],
    exercises: [
      { name: 'Supine leg raise (slow)', sets: '10 reps x 3', purpose: 'Active hip flexor loading at moderate range' },
      { name: 'Hip flexor stretch', sets: '45s x 3, daily', purpose: 'Flexibility recovery' },
      { name: 'Tuck L-sit (pain-free only)', sets: '5-10s holds x 3', purpose: 'Gradual return to compression work' }
    ]
  }
];

export const warmupProtocol = {
  title: 'CALIX Universal Warmup Protocol',
  duration: '10-15 minutes',
  phases: [
    {
      name: 'Phase 1: Blood Flow (3-5 min)',
      exercises: [
        'Jumping jacks — 30 seconds',
        'Arm circles — 30 seconds',
        'Hip circles — 30 seconds',
        'Leg swings (forward/back, lateral) — 30 seconds each',
        'Light jogging in place — 60 seconds'
      ]
    },
    {
      name: 'Phase 2: Joint Mobilization (5-7 min)',
      exercises: [
        'Wrist CARs — 5 circles each direction, each hand',
        'Shoulder CARs — 3-5 full rotations each arm',
        'Scapular circles — 10 forward, 10 backward',
        'Neck circles — gentle, 5 each direction',
        'Thoracic rotation — seated or standing, 10 reps',
        'Hip CARs — 5 circles each direction, each hip',
        'Ankle circles — 10 each direction'
      ]
    },
    {
      name: 'Phase 3: Movement-Specific Activation (3-5 min)',
      exercises: [
        'PUSH sessions: 10 wall push-ups, 5 incline push-ups, dead hang 20s',
        'PULL sessions: Dead hang 30s, 5 scapular pull-ups, 5 Australian rows',
        'CORE sessions: Hollow body 20s, arch body 20s, plank 20s',
        'LEG sessions: 10 bodyweight squats, 5 lunges each side, glute bridges'
      ]
    }
  ]
};

export const cooldownProtocol = {
  title: 'CALIX Universal Cooldown Protocol',
  duration: '8-12 minutes',
  exercises: [
    { name: 'Child pose', duration: '60 seconds', purpose: 'Shoulder and spine decompression' },
    { name: 'Doorway chest stretch', duration: '30 seconds x 2', purpose: 'Anterior chest release after pushing' },
    { name: 'Lat stretch', duration: '30 seconds each side', purpose: 'Lat decompression after pulling' },
    { name: 'Hip flexor stretch (lunge)', duration: '45 seconds each side', purpose: 'Hip flexor release after core and leg work' },
    { name: 'Wrist extension stretch', duration: '30 seconds x 3 positions', purpose: 'Wrist decompression after any wrist loading' },
    { name: 'Thoracic extension', duration: '60 seconds', purpose: 'Spinal extension after flexion-dominant work' },
    { name: 'Hamstring stretch', duration: '30 seconds each side', purpose: 'Hamstring release' },
    { name: 'Deep breathing', duration: '2-3 minutes', purpose: 'Nervous system down-regulation, recovery initiation' }
  ]
};
