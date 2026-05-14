import React, { useState } from 'react';

const mobilityAreas = [
  {
    id: 'wrist',
    name: 'Wrist Mobility',
    icon: '✊',
    priority: 'Critical',
    priorityColor: '#ff0040',
    relevance: 'Push-ups, planche, handstand, parallette work',
    description: 'Wrist mobility is the #1 limiting factor for most calisthenics athletes. Insufficient wrist extension causes wrist pain during push-ups, prevents handstand training, and blocks all planche progressions. This must be addressed from Day 1 and maintained throughout your career.',
    science: 'The wrist requires approximately 70-80 degrees of extension for comfortable push-up loading, and 90+ degrees for handstand and planche work. Most people enter calisthenics with 40-60 degrees. The limiting factor is typically the joint capsule (particularly the dorsal radiocarpal ligament) combined with underactivated wrist extensor musculature. CARs-based training teaches the nervous system the range is safe while building the muscular strength to actively achieve it.',
    exercises: [
      {
        name: 'Wrist CARs (Controlled Articular Rotations)',
        sets: '5 circles each direction, each hand',
        frequency: 'Daily — before every session',
        steps: [
          'Make a fist and hold arm straight out',
          'Slowly rotate through full wrist range: up, side, down, in',
          'Take 5-10 seconds for each full rotation',
          'Maximize end range in every direction',
          'Perform both clockwise and counter-clockwise',
          'Progress to loaded version on all-fours'
        ],
        tips: 'Slow is the key — speed eliminates the mobility benefit entirely'
      },
      {
        name: 'Prayer Stretch (Wrist Extension)',
        sets: '30-45 seconds x 3, daily',
        frequency: 'Daily',
        steps: [
          'Press palms together in front of chest (prayer position)',
          'Lower hands toward navel while keeping palms together',
          'Feel the stretch across the back of the wrist',
          'Hold at the limit of comfortable range',
          'Progress by lowering hands further over weeks'
        ],
        tips: 'Never force range — breathe into the restriction'
      },
      {
        name: 'Loaded Wrist Extension (Floor)',
        sets: '3 x 10 extensions, daily',
        frequency: 'Daily after passive stretching',
        steps: [
          'On all-fours, place hands flat with fingers pointing forward',
          'Gently lean forward over hands — feel the wrist extension load',
          'Hold 2-3 seconds at the limit',
          'Release and repeat',
          'Progress by turning fingers to sides, then backward'
        ],
        tips: 'This is progressive tendon loading — more powerful than passive stretching alone'
      },
      {
        name: 'Wrist Extensor Strengthening',
        sets: '15 reps x 3, 3x weekly',
        frequency: '3x per week',
        steps: [
          'Seated, forearm resting on thigh',
          'Hold light weight (1-2kg) in hand, palm facing down',
          'Lift hand up (wrist extension) against gravity',
          'Lower slowly with control (eccentric phase)',
          'Builds the wrist extensors that actively support extension'
        ],
        tips: 'The eccentric (lowering) phase is the most important for strength development'
      }
    ]
  },
  {
    id: 'shoulder',
    name: 'Shoulder Mobility',
    icon: '🏋️',
    priority: 'Critical',
    priorityColor: '#ff0040',
    relevance: 'Handstand, overhead pressing, pull-ups, back lever, rings',
    description: 'Shoulder mobility is the second most critical mobility requirement. The shoulder must achieve full 180-degree overhead flexion for handstand, adequate extension for back lever and skin-the-cat, and sufficient internal/external rotation for all pulling and pushing movements.',
    science: 'The shoulder joint is the most mobile joint in the body (glenohumeral joint) but also the most frequently injured in calisthenics. Full overhead flexion (180 degrees) requires simultaneous upward rotation and posterior tilt of the scapula, combined with appropriate thoracic extension and adequate glenohumeral range. When thoracic kyphosis (rounded upper back) is present, it mechanically blocks scapular upward rotation, limiting overhead reach and increasing impingement risk.',
    exercises: [
      {
        name: 'Shoulder CARs (Full Arm Rotations)',
        sets: '3-5 full circles each arm, each direction',
        frequency: 'Daily',
        steps: [
          'Stand with one arm at side',
          'Slowly lift arm forward, then overhead, then behind, then back down',
          'Take 5-10 seconds for the full rotation',
          'Maximize range at every point — especially overhead and behind',
          'Do both forward and backward circles',
          'Make the circle as large as possible'
        ],
        tips: 'The backward circle (starting with arm going behind) is usually much tighter — that is where you need work'
      },
      {
        name: 'Band Dislocates / Shoulder Dislocates',
        sets: '10-15 reps, daily',
        frequency: 'Daily',
        steps: [
          'Hold a resistance band or broomstick wider than shoulder width',
          'Arms straight, bring band from front of body to behind',
          'Keep arms straight throughout — do not bend elbows',
          'Return to front and repeat',
          'Gradually narrow grip over months as mobility improves'
        ],
        tips: 'Use a wide grip — never force narrow grip range. The stretch should be felt in the front of the shoulder'
      },
      {
        name: 'Sleeper Stretch (Posterior Capsule)',
        sets: '30-45 seconds x 3, each side',
        frequency: 'Daily',
        steps: [
          'Lie on your side with arm at 90 degrees',
          'Use other hand to gently rotate the forearm toward the floor',
          'Feel the stretch in the back of the shoulder',
          'Hold at comfortable end range',
          'This improves internal rotation — critical for rings and overhead work'
        ],
        tips: 'Common in overhead athletes — most calisthenics practitioners benefit significantly from this'
      },
      {
        name: 'Wall Overhead Stretch',
        sets: '30-45 seconds x 3',
        frequency: 'Daily',
        steps: [
          'Stand arm-length from wall',
          'Place hand on wall at shoulder height',
          'Rotate body away from wall while keeping hand in place',
          'Feel the front-of-shoulder stretch',
          'Vary arm height (low, mid, high) to target different shoulder angles'
        ],
        tips: 'Important for chest and anterior deltoid flexibility required in handstand and planche'
      }
    ]
  },
  {
    id: 'thoracic',
    name: 'Thoracic Spine',
    icon: '🦴',
    priority: 'High',
    priorityColor: '#ff6b35',
    relevance: 'Handstand alignment, overhead pressing, bridge, posture',
    description: 'The thoracic spine (mid-back, T1-T12) must extend freely to allow full overhead arm reach without compensating through the lower back or shoulders. Thoracic kyphosis (rounded mid-back) is one of the most common postural restrictions that limits handstand quality and overhead mobility.',
    science: 'Thoracic extension mobility directly determines scapular upward rotation capacity. When the thoracic spine is excessively kyphotic, the scapula cannot tip posteriorly or rotate upward adequately, mechanically blocking overhead elevation and increasing subacromial impingement risk. Research shows even small improvements in thoracic extension (as little as 10 degrees) produce measurable improvements in overhead reach and shoulder mobility.',
    exercises: [
      {
        name: 'Thoracic Extension Over Foam Roller',
        sets: '60-90 seconds per segment',
        frequency: 'Daily',
        steps: [
          'Place foam roller perpendicular to spine at mid-back (T5-T10 region)',
          'Support head with hands, feet flat on floor',
          'Gently extend back over the roller — let gravity work',
          'Breathe deeply into the extended position',
          'Move roller up 1-2 inches at a time, repeat',
          'ONLY thoracic region — not lumbar (lower back)'
        ],
        tips: 'Never roll the lumbar spine — only mid-back. The segment just below the shoulder blades responds most'
      },
      {
        name: 'Thread the Needle',
        sets: '10 reps each side, both sides',
        frequency: 'Daily',
        steps: [
          'Start on all-fours (table position)',
          'Take one arm and thread it under the body, reaching as far as possible',
          'Rotate thoracic spine to follow the arm',
          'Hold the end position 2-3 seconds',
          'Return and repeat',
          'This is the most effective thoracic rotation mobilization'
        ],
        tips: 'Keep hips still — all the movement comes from the thoracic spine'
      },
      {
        name: 'Seated Thoracic Rotation',
        sets: '10 reps each side, hold 2-3s at end range',
        frequency: 'Daily',
        steps: [
          'Sit on floor or chair with upright posture',
          'Cross arms over chest',
          'Rotate torso as far as possible to one side',
          'Hold 2-3 seconds at maximum range',
          'Return and rotate to other side'
        ],
        tips: 'Eyes and head follow the rotation — adds cervical component'
      }
    ]
  },
  {
    id: 'hip',
    name: 'Hip Mobility',
    icon: '🔄',
    priority: 'High',
    priorityColor: '#ff6b35',
    relevance: 'Squat depth, pistol squat, L-sit, straddle planche',
    description: 'Hip mobility encompasses hip flexion (L-sit, deep squat), hip extension (bridge, back lever), hip external rotation (squat width, straddle planche), and hip internal rotation (full squat mechanics). All are essential for different calisthenics movements.',
    science: 'Hip mobility in calisthenics is often confused with flexibility (passive stretching). More important is active hip mobility — the ability to move through range UNDER MUSCULAR CONTROL. For L-sit, active hip flexion strength in the shortened range is needed. For straddle planche, active hip abduction strength is needed. Passive flexibility training must be paired with active strengthening to produce functional improvement.',
    exercises: [
      {
        name: 'Hip CARs',
        sets: '5 circles each direction, each hip',
        frequency: 'Daily',
        steps: [
          'Stand on one leg (use wall for balance if needed)',
          'Lift opposite knee to hip height',
          'Draw the largest circle possible with the knee: forward, out, back, in',
          'Maximize range at every point in the circle',
          'Perform forward and backward circles',
          'Both hips equally important'
        ],
        tips: 'Keep the stance leg slightly bent and standing tall — do not tilt pelvis during the rotation'
      },
      {
        name: 'Hip Flexor Stretch (Active)',
        sets: '45-60 seconds x 3, each side',
        frequency: 'Daily',
        steps: [
          'Lunge position: front foot flat, rear knee on floor',
          'Tuck the pelvis (posterior pelvic tilt) to increase the stretch',
          'Squeeze the glute of the rear leg actively',
          'Push hips forward while maintaining pelvic tuck',
          'Hold at comfortable end range'
        ],
        tips: 'The active version (squeezing glute + posterior tilt) is 50% more effective than passive because reciprocal inhibition relaxes the hip flexor'
      },
      {
        name: 'Pigeon Pose (Hip External Rotation)',
        sets: '60-90 seconds x 2, each side',
        frequency: 3,
        steps: [
          'From all-fours, bring one shin horizontal across to front',
          'Rear leg extends straight behind',
          'Hips square to floor (rear hip pressing down)',
          'Hold in upright position or fold forward for deeper stretch',
          'Breathe deeply into the hip'
        ],
        tips: 'If hip is very tight, support under front hip with block or folded blanket'
      },
      {
        name: 'Deep Squat Hold',
        sets: '60-90 seconds x 2, daily',
        frequency: 'Daily',
        steps: [
          'Feet shoulder-width, toes out 15-30 degrees',
          'Drop into full squat position — below parallel',
          'Heels flat on floor (use heel elevation if needed initially)',
          'Elbows press knees apart',
          'Hold relaxed at full depth',
          'Progress by bringing heel elevation to zero over weeks'
        ],
        tips: 'One of the most fundamental human movement positions — should be a daily rest position'
      }
    ]
  },
  {
    id: 'hamstring',
    name: 'Hamstring Flexibility',
    icon: '🦵',
    priority: 'Medium',
    priorityColor: '#ffd700',
    relevance: 'L-sit, pike push-up, straddle planche, front splits',
    description: 'Hamstring flexibility determines the quality of L-sit, pike push-up position, straddle compression, and front split progressions. Tight hamstrings are extremely common in Western populations due to extensive sitting, making this a priority for most practitioners.',
    science: 'Hamstring flexibility is primarily limited by neural inhibition (the stretch reflex protecting the muscle from injury) rather than structural shortening. This is why progressive loaded stretching (PNF, isometric holds in stretched position) produces faster results than passive stretching alone. The nervous system gradually learns to allow the muscle to lengthen further as it gains confidence that the position is safe.',
    exercises: [
      {
        name: 'Seated Forward Fold (Passive)',
        sets: '60-90 seconds x 3',
        frequency: 'Daily',
        steps: [
          'Sit with legs straight in front, feet together',
          'Sit tall — lengthen spine first',
          'Fold forward from hips (not waist) reaching toward feet',
          'Hold at the comfortable limit',
          'Breathe into the restriction — exhale to relax deeper'
        ],
        tips: 'The "fold from hips" cue is critical — most people round from the waist, which reduces hamstring stretch'
      },
      {
        name: 'Standing Pike Stretch',
        sets: '60 seconds x 3',
        frequency: 'Daily',
        steps: [
          'Stand tall, feet together',
          'Hinge at hips, lower hands toward floor',
          'Keep legs as straight as possible',
          'Hold at comfortable limit — do not bounce',
          'Progress: bring hands to floor, then further'
        ],
        tips: 'Micro-bend in knees is acceptable — do not hyperextend'
      },
      {
        name: 'PNF Hamstring Stretch',
        sets: '3 rounds x 30-45 seconds',
        frequency: '3x per week',
        steps: [
          'Lie on back, one leg up toward ceiling',
          'Hold leg with hands or strap behind knee',
          'Press leg against hands for 10 seconds (isometric contraction)',
          'Relax and exhale — gently pull leg closer',
          'Repeat 3 times per side',
          'This is the fastest hamstring flexibility method'
        ],
        tips: 'PNF (Proprioceptive Neuromuscular Facilitation) produces 2-3x faster flexibility gains than passive stretching'
      }
    ]
  },
  {
    id: 'ankle',
    name: 'Ankle Dorsiflexion',
    icon: '🦶',
    priority: 'Medium',
    priorityColor: '#ffd700',
    relevance: 'Squat depth, pistol squat, balance work',
    description: 'Ankle dorsiflexion (shin moving toward the foot) is a commonly overlooked mobility requirement. Insufficient dorsiflexion (less than 15 degrees) causes heels to rise in squats, knee valgus collapse, and compensatory forward lean — all of which increase injury risk.',
    science: 'The ankle requires 15-20 degrees of dorsiflexion for a body-weight squat and 25+ degrees for a pistol squat. The limitation is usually the posterior ankle capsule combined with tight gastrocnemius/soleus. The most effective intervention is eccentrically loaded stretching (calf eccentric lowering on step) combined with ankle CARs.',
    exercises: [
      {
        name: 'Ankle CARs',
        sets: '10 circles each direction, each ankle',
        frequency: 'Daily',
        steps: [
          'Sit or stand, one foot off floor',
          'Draw the largest circle possible with the foot',
          'Move through plantar flexion, inversion, dorsiflexion, eversion',
          'Slow and controlled — 3-5 seconds per rotation',
          'Both directions'
        ],
        tips: 'Often neglected — the ankle is the base of the entire lower chain'
      },
      {
        name: 'Wall Ankle Stretch (Lunge)',
        sets: '45-60 seconds x 3, each side',
        frequency: 'Daily',
        steps: [
          'Place foot 3-4 inches from a wall',
          'Drive knee forward toward wall — touching wall without heel rising',
          'Gradually move foot closer to wall as range improves',
          'This is the most effective ankle dorsiflexion stretch'
        ],
        tips: 'Measure progress: how close can your foot get to the wall while keeping heel down?'
      },
      {
        name: 'Eccentric Calf Raise (Step)',
        sets: '15 reps x 3 per leg, 3x weekly',
        frequency: '3x per week',
        steps: [
          'Stand on edge of step, one leg at a time',
          'Rise onto toe with both legs',
          'Lower slowly (eccentric) on one leg',
          'Aim for 5-8 seconds down',
          'Go as low as comfortable — heel drops below step'
        ],
        tips: 'The most effective ankle mobility and soleus/gastroc strengthening combination'
      }
    ]
  }
];

export const MobilityView: React.FC = () => {
  const [activeArea, setActiveArea] = useState(mobilityAreas[0].id);
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);

  const area = mobilityAreas.find(a => a.id === activeArea) || mobilityAreas[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>Mobility & Flexibility System</h1>
        <p className="mt-1 calix-muted">
          Comprehensive joint mobilization, flexibility, and movement preparation for calisthenics mastery
        </p>
      </div>

      {/* Priority Statement */}
      <div className="p-5 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(255,0,64,0.1), rgba(255,107,53,0.1))', border: '1px solid rgba(255,0,64,0.3)' }}>
        <h3 className="font-bold mb-2" style={{ color: '#ff0040' }}>⚠️ The Most Missed Training Element</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--calix-text)' }}>
          Mobility training is not a nice-to-have addition to calisthenics training — it IS training.
          The most common reason people plateau or get injured is insufficient joint mobility.
          Wrist pain stops planche training. Shoulder tightness blocks handstands.
          Hamstring tightness limits L-sits. Ankle stiffness destroys pistol squats.
          <strong style={{ color: '#ff6b35' }}> 10-15 minutes of mobility work daily is worth more than 30 minutes of extra volume.</strong>
        </p>
      </div>

      {/* Area Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {mobilityAreas.map(area => (
          <button
            key={area.id}
            onClick={() => setActiveArea(area.id)}
            className="p-3 rounded-xl text-center transition-all card-hover"
            style={{
              backgroundColor: activeArea === area.id ? 'rgba(108,99,255,0.15)' : 'var(--calix-surface)',
              border: `1px solid ${activeArea === area.id ? 'var(--calix-accent)' : 'var(--calix-border)'}`,
            }}
          >
            <div className="text-2xl mb-1">{area.icon}</div>
            <div className="text-xs font-bold" style={{ color: 'var(--calix-text)' }}>{area.name}</div>
            <div className="text-xs mt-1 font-medium" style={{ color: area.priorityColor }}>
              {area.priority}
            </div>
          </button>
        ))}
      </div>

      {/* Area Detail */}
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>

        {/* Area Header */}
        <div className="p-6" style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(255,107,53,0.05))' }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{area.icon}</span>
            <div>
              <h2 className="text-xl font-black" style={{ color: 'var(--calix-text)' }}>{area.name}</h2>
              <div className="text-xs font-bold" style={{ color: area.priorityColor }}>
                Priority: {area.priority}
              </div>
            </div>
          </div>
          <div className="text-xs px-3 py-1.5 rounded-lg inline-block mb-3"
            style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-muted)' }}>
            Relevant for: {area.relevance}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--calix-text)', opacity: 0.9 }}>
            {area.description}
          </p>
        </div>

        {/* Science Notes */}
        <div className="p-6" style={{ borderTop: '1px solid var(--calix-border)' }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#00ccff' }}>
            🔬 Sports Science
          </div>
          <div className="p-4 rounded-xl text-sm leading-relaxed"
            style={{ backgroundColor: 'rgba(0,204,255,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,204,255,0.15)' }}>
            {area.science}
          </div>
        </div>

        {/* Exercises */}
        <div className="p-6 space-y-4" style={{ borderTop: '1px solid var(--calix-border)' }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--calix-accent)' }}>
            Exercise Protocol
          </div>
          {area.exercises.map((ex, i) => (
            <div key={i} className="rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--calix-border)' }}>
              <div
                className="p-4 cursor-pointer flex items-center justify-between"
                style={{ backgroundColor: 'var(--calix-surface2)' }}
                onClick={() => setExpandedExercise(expandedExercise === `${area.id}-${i}` ? null : `${area.id}-${i}`)}
              >
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--calix-text)' }}>{ex.name}</div>
                  <div className="text-xs mt-0.5">
                    <span style={{ color: 'var(--calix-accent)' }}>{ex.sets}</span>
                    <span className="calix-muted mx-2">·</span>
                    <span style={{ color: '#00ff88' }}>
                      {typeof ex.frequency === 'string' ? ex.frequency : `${ex.frequency}x per week`}
                    </span>
                  </div>
                </div>
                <span className="calix-muted">
                  {expandedExercise === `${area.id}-${i}` ? '▲' : '▼'}
                </span>
              </div>

              {expandedExercise === `${area.id}-${i}` && (
                <div className="p-4 space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">How to Perform</div>
                    <ol className="space-y-1.5">
                      {ex.steps.map((step, si) => (
                        <li key={si} className="flex gap-3 text-sm" style={{ color: 'var(--calix-text)' }}>
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ backgroundColor: 'var(--calix-accent)', minWidth: '20px' }}>
                            {si + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="p-3 rounded-xl flex gap-2 text-sm"
                    style={{ backgroundColor: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)' }}>
                    <span>💡</span>
                    <span style={{ color: 'var(--calix-text)' }}>{ex.tips}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Mobility Routine */}
      <div className="p-6 rounded-2xl"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--calix-text)' }}>
          📅 Daily 10-Minute Mobility Routine (All Areas)
        </h3>
        <p className="text-sm mb-4 calix-muted">
          This minimum daily routine addresses all major mobility requirements for calisthenics in 10 minutes.
          Do this every morning or before every training session.
        </p>
        <div className="space-y-2">
          {[
            { time: '1-2 min', exercise: 'Wrist CARs — 5 circles each direction, each hand', icon: '✊' },
            { time: '1-2 min', exercise: 'Shoulder CARs — 5 circles each arm, each direction', icon: '🏋️' },
            { time: '1 min', exercise: 'Scapular circles — 10 forward, 10 backward', icon: '🦴' },
            { time: '1 min', exercise: 'Hip CARs — 5 circles each direction, each hip', icon: '🔄' },
            { time: '30 sec', exercise: 'Ankle circles — 10 each direction, each ankle', icon: '🦶' },
            { time: '1 min', exercise: 'Dead hang passive — 30-60 seconds total', icon: '🔗' },
            { time: '1 min', exercise: 'Thoracic extension over foam roll — 60 seconds', icon: '🦴' },
            { time: '1 min', exercise: 'Deep squat hold — 60 seconds', icon: '🔄' },
            { time: '1 min', exercise: 'Hip flexor stretch — 30s each side', icon: '🦵' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl"
              style={{ backgroundColor: 'var(--calix-surface2)' }}>
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1 text-sm" style={{ color: 'var(--calix-text)' }}>{item.exercise}</div>
              <div className="text-xs font-bold flex-shrink-0" style={{ color: 'var(--calix-accent)' }}>{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
