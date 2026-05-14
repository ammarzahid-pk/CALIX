import React, { useState } from 'react';

const scienceTopics = [
  {
    id: 'strength-adaptation',
    title: 'Strength Adaptation Science',
    icon: '💪',
    category: 'Physiology',
    summary: 'How the body builds strength and what that means for programming',
    content: [
      {
        heading: 'Neural Adaptation (Weeks 1-8)',
        text: 'The first 4-8 weeks of any new training program produce strength gains primarily through neural adaptation rather than muscle growth. The nervous system learns to recruit more motor units simultaneously, coordinate muscle firing patterns, and reduce inhibitory signals from Golgi tendon organs. This is why beginners get strong quickly even without visible muscle growth. It also means that beginners benefit most from practicing movements frequently — skill learning is the primary adaptation.'
      },
      {
        heading: 'Muscular Hypertrophy (Weeks 6+)',
        text: 'Structural muscle growth (hypertrophy) begins after neural adaptation and continues for years with progressive overload. Hypertrophy occurs when mechanical tension (load x time under tension) exceeds a threshold that signals the satellite cells to fuse and add myofibrils to existing muscle fibers. In calisthenics, this requires progressive increases in difficulty (harder progressions, added weight) to continually provide sufficient mechanical stimulus as the muscles adapt.'
      },
      {
        heading: 'Tendon Adaptation (Months to Years)',
        text: 'Tendons and ligaments adapt at approximately 1/3 the rate of muscles. This is the primary limiting factor in advanced calisthenics — the muscles can handle loads that the tendons are not yet conditioned for. Tendon collagen synthesis increases with loading but requires 8-12+ weeks to meaningfully increase tendon stiffness and cross-sectional area. This is why progressive loading over months (not sudden jumps) is the only safe approach to advanced skills.'
      },
      {
        heading: 'Rate of Force Development (RFD)',
        text: 'Explosive calisthenics skills (plyometrics, muscle-ups) require high RFD — the ability to produce maximum force in minimum time. RFD is improved through specific power training (fast-twitch fiber recruitment), plyometrics, and reflex training. RFD is trained distinctly from maximum strength and must be explicitly programmed. High-rep slow training does NOT improve RFD.'
      },
      {
        heading: 'Periodization for Calisthenics',
        text: 'Long-term progress requires periodization — planned variation in training volume and intensity. The most evidence-supported model for calisthenics is undulating periodization (varying intensity within a week) combined with planned deloads every 4-6 weeks. Without periodization, adaptation stagnates as the training stimulus becomes insufficient. Deloads are not rest — they are when the neural adaptations from previous hard training are consolidated.'
      }
    ]
  },
  {
    id: 'skill-acquisition',
    title: 'Skill Acquisition & Motor Learning',
    icon: '🧠',
    category: 'Neuroscience',
    summary: 'The science of learning athletic skills and optimizing skill acquisition',
    content: [
      {
        heading: 'Three Stages of Motor Learning (Fitts & Posner)',
        text: 'Stage 1 - Cognitive: The learner must consciously think through every component of the movement. Learning is slow and movements appear choppy and inconsistent. This is where most beginners are for weeks to months. Stage 2 - Associative: Key errors are eliminated. Movement becomes more consistent but still requires conscious attention. Stage 3 - Autonomous: The movement becomes automatic — the athlete can perform the skill without conscious thought. Most beginners never reach stage 3 for complex skills because they do not practice consistently enough to automate.'
      },
      {
        heading: 'Blocked vs. Variable Practice',
        text: 'Research shows that blocked practice (repeating the same skill over and over in one session) produces faster short-term learning but poorer long-term retention. Variable practice (mixing skills, contexts, and variations) produces slower initial learning but dramatically superior long-term retention and transfer. For calisthenics skill training, practicing the skill in slightly different contexts (different heights, angles, tempos) is more effective than pure repetition.'
      },
      {
        heading: 'The Role of Neural Fatigue in Skill Training',
        text: 'Skill learning rate decreases dramatically with neural fatigue. Research shows that fine motor skill acquisition is 40-60% less efficient in a fatigued state. This is why skill training must ALWAYS be performed at the beginning of a session when the nervous system is fresh. Performing handstand attempts after heavy pull-ups is neurologically counterproductive. Skills first, strength second — always.'
      },
      {
        heading: 'Specificity and Transfer',
        text: 'Motor learning is highly specific — practicing the front lever tuck does not directly improve the full front lever beyond the strength component. Each position, angle, and context is a distinct motor pattern. This explains why intermediate calisthenics practitioners often plateau: they have built strength but not the specific neural patterns for the target skill. Specificity of practice is as important as strength.'
      },
      {
        heading: 'Sleep and Skill Consolidation',
        text: 'Motor memory consolidation primarily occurs during sleep — specifically during slow-wave sleep (SWS) and REM sleep. Research by Walker (2017) shows that a night of sleep after skill practice produces 20-30% more improvement than the same amount of waking time. This means that practicing a skill before sleep is more effective than practicing in the morning, and that 7-9 hours of sleep is not optional — it is when the skill learning actually happens.'
      }
    ]
  },
  {
    id: 'tendon-health',
    title: 'Tendon Science & Joint Health',
    icon: '🦴',
    category: 'Biomechanics',
    summary: 'Why tendons are your most valuable calisthenics asset and how to protect them',
    content: [
      {
        heading: 'Why Tendons Matter More Than Muscles in Calisthenics',
        text: 'In mainstream fitness, muscles are the primary focus. In elite calisthenics, tendons are the limiting factor. The biceps tendon in front lever training, the wrist extensor tendons in planche, and the patellar tendon in explosive leg work are all regularly loaded at levels that exceed what most tendons are prepared for. Tendon injuries are the most common career-limiting injuries in calisthenics. Preventing them requires understanding them.'
      },
      {
        heading: 'Tendon Physiology: Why They Adapt Slowly',
        text: 'Muscles are highly vascular (well blood-supplied) tissue — they receive a significant supply of nutrients and respond quickly to training. Tendons are largely avascular (poor blood supply), especially in their mid-portions. Collagen synthesis is the primary adaptation mechanism, and collagen has a turnover rate measured in months, not days. Research by Magnusson and Kjaer shows that tendon collagen synthesis increases after loading, but peak synthesis occurs 24-72 hours AFTER the training stimulus and the net collagen gain requires weeks to accumulate.'
      },
      {
        heading: 'The Tendon Loading Sweet Spot',
        text: 'Research by Docking and Cook (2016) shows tendons exist on a continuum from reactive tendon (early pathology, responds well to load modification and progressive reloading) to degenerative tendon (chronic pathology, damaged collagen structure). The key is loading tendons in their sweet spot — enough to stimulate collagen synthesis and adaptation, not enough to cause pathological damage. The progressive overload principle applies strictly to tendon training: never increase load or volume by more than 10% per week.'
      },
      {
        heading: 'Collagen and Nutrition',
        text: 'Vitamin C is required for collagen synthesis — deficiency directly impairs tendon healing and adaptation. Research by Shaw et al. (2017) shows that 15 grams of gelatin (collagen) consumed with vitamin C one hour before exercise significantly increases collagen synthesis in tendons compared to control. While nutrition is outside CALIX scope, this research shows the tendon-specific importance of adequate protein quality and vitamin C for calisthenics athletes training high-intensity tendon-loading skills.'
      },
      {
        heading: 'Isometric Loading for Tendon Health',
        text: 'Research by Rio et al. (2015) shows that isometric loading (held contractions, not moving) produces strong analgesic effects for tendinopathies, reducing pain immediately after loading. Isometric contractions at 70-80% of maximum voluntary contraction, held for 45 seconds, 4 times, produce the most consistent pain relief and tendon stimulus. This is why planks, L-sits, planche leans, and other isometric holds are not just skill training — they are tendon health training.'
      }
    ]
  },
  {
    id: 'mobility-science',
    title: 'Mobility & Flexibility Science',
    icon: '🧘',
    category: 'Physiology',
    summary: 'The real science behind flexibility development and how to train it effectively',
    content: [
      {
        heading: 'The Neural Theory of Flexibility',
        text: 'The primary limiter of flexibility in most people is not muscle fiber length — it is the nervous system. The stretch reflex (myotatic reflex) is a protective mechanism that causes muscles to contract when stretched beyond a certain range to prevent injury. What we call "tightness" is largely the nervous system limiting range because it does not trust the position. Flexibility training works by habitually loading the end range under muscular control, teaching the nervous system that the position is safe and gradually removing the protective reflex.'
      },
      {
        heading: 'Passive vs. Active Flexibility',
        text: 'Passive flexibility is range achieved with external force (gravity, a partner, or a strap). Active flexibility is range achieved through muscular control alone. Active flexibility is always less than passive flexibility — the gap represents the "neurological slack." Research consistently shows that calisthenics performance improves most when active flexibility (not just passive) is developed. L-sit requires active hip flexion strength, not just passive hamstring flexibility. Handstand requires active overhead shoulder stability, not just passive shoulder flexibility.'
      },
      {
        heading: 'PNF Stretching: Why It Works',
        text: 'Proprioceptive Neuromuscular Facilitation (PNF) stretching, particularly the contract-relax technique, produces 2-3x greater flexibility gains than passive stretching in research studies. The mechanism: an isometric contraction before the stretch causes the Golgi tendon organ (GTO) to fire, inhibiting the stretch reflex through the autogenic inhibition reflex. Immediately after the contraction, the muscle is temporarily more permissive of lengthening. This is why PNF hamstring stretching (pressing leg against resistance for 10 seconds, then pulling further) works so well.'
      },
      {
        heading: 'Loaded Stretching (Strength in Flexibility)',
        text: 'Loaded stretching — stretching with added load at the end range — appears to produce faster structural adaptation than unloaded stretching. Research by Weppler and Magnusson suggests that while neural inhibition explains short-term flexibility gains, long-term flexibility requires actual mechanical changes in the connective tissue structure. Loaded stretching achieves this by providing enough mechanical force to stimulate collagen remodeling in the end ranges of movement.'
      },
      {
        heading: 'The Frequency Principle',
        text: 'Flexibility responds to frequency more than to duration of individual sessions. A 2019 meta-analysis found that stretching 5 days per week (even for 5 minutes each day) produced significantly greater gains than stretching once per week for extended periods. For calisthenics practitioners, 10 minutes of mobility work daily is far more effective than 60 minutes on the weekend only. Daily practice is non-negotiable for meaningful mobility improvement.'
      }
    ]
  },
  {
    id: 'biomechanics',
    title: 'Calisthenics Biomechanics',
    icon: '⚙️',
    category: 'Biomechanics',
    summary: 'The mechanical principles governing calisthenics exercises and skill progressions',
    content: [
      {
        heading: 'Moment Arms and Lever Physics',
        text: 'The fundamental concept in calisthenics biomechanics is the moment arm — the perpendicular distance between the force vector and the axis of rotation. In the planche, the moment arm at the shoulder increases as the body lengthens from tuck to straddle to full. This is why a full planche is exponentially harder than a tuck planche — the moment arm (and therefore the required torque) approximately doubles. Understanding moment arms explains every progression in calisthenics: moving from tuck to advanced tuck to straddle to full is systematically increasing the moment arm.'
      },
      {
        heading: 'Straight-Arm vs. Bent-Arm Strength',
        text: 'Calisthenics involves two distinct categories of exercises: bent-arm (involving joint flexion/extension) and straight-arm (requiring isometric elbow extension to maintain joint position). Straight-arm strength — required for planche, front lever, L-sit, iron cross — is a distinct physical quality that transfers poorly from bent-arm exercises. This is why someone with strong pull-ups may still be unable to hold a front lever: they have strong latissimus but have not trained the specific elbow-straight lat contraction against load required for straight-arm pulling skills.'
      },
      {
        heading: 'The Scapular Position and Shoulder Function',
        text: 'Scapular position determines shoulder health and strength expression in nearly every calisthenics exercise. Scapular depression (pulling shoulder blades down) in pull-ups correctly loads the lats and prevents upper trap dominance. Scapular protraction (pushing shoulder blades apart) at the top of push-ups activates serratus anterior for joint health. In planche, maximal scapular protraction is mechanically necessary to shift the shoulder joint into the position where the anterior deltoid can effectively resist the gravitational force. Scapular control is not optional — it is fundamental.'
      },
      {
        heading: 'The Hollow Body Principle',
        text: 'The hollow body shape — posterior pelvic tilt, abs braced, lower back flat — is the fundamental body shape for gymnastics and calisthenics. In a handstand, hollow body aligns the skeleton for optimal load transfer from hands to feet. In a planche, hollow body prevents lumbar hyperextension that would reduce the effective moment arm. In push-ups, hollow body ensures the core transmits force efficiently between the pushing upper body and the lower body. Understanding the hollow body as a mechanical principle (not just a drill) transforms how you think about every movement.'
      },
      {
        heading: 'Force Vectors in Ring Training',
        text: 'Gymnastic rings provide an unstable environment where force can be applied in any direction — compared to fixed bars where force is constrained to one plane. This freedom requires the rotator cuff, serratus anterior, and all shoulder stabilizers to continuously manage 3-dimensional force vectors. Research shows that ring exercises produce 30-50% higher activation of shoulder stabilizers compared to equivalent fixed-bar exercises. This is both the challenge and the benefit of ring training — it builds truly three-dimensional shoulder stability that transfers to all athletic activities.'
      }
    ]
  },
  {
    id: 'recovery-science',
    title: 'Recovery Science',
    icon: '💤',
    category: 'Physiology',
    summary: 'The science of optimizing recovery for maximum calisthenics progress',
    content: [
      {
        heading: 'Sleep: The Non-Negotiable Performance Variable',
        text: 'Sleep is the single most impactful recovery variable and the most commonly under-prioritized. During deep sleep (slow-wave sleep), growth hormone secretion peaks — this is the primary mechanism by which tissue repair and muscle protein synthesis occurs overnight. Reducing sleep from 8 to 6 hours for 2 weeks produces cognitive and physical impairments equivalent to 48 hours of total sleep deprivation. For calisthenics athletes, skill consolidation, strength adaptation, and tendon recovery all require adequate sleep duration (7-9 hours) AND quality.'
      },
      {
        heading: 'Supercompensation and the Recovery Window',
        text: 'Training creates a stress that temporarily reduces performance (acute fatigue). During the subsequent recovery period, the body adapts to be better than before (supercompensation). If the next training session occurs too early (before supercompensation), performance declines chronically. Too late (after supercompensation peaks), the adaptation is lost. The optimal training frequency places sessions at the supercompensation peak. For calisthenics skills: skill practice can occur daily (neural practice is low stress); for maximal strength work, 48-72 hours recovery between sessions for the same muscle group is typical.'
      },
      {
        heading: 'Heart Rate Variability (HRV) as a Recovery Marker',
        text: 'Heart Rate Variability (HRV) — the variation in time between heartbeats — reflects autonomic nervous system state and correlates strongly with recovery status. Higher HRV indicates parasympathetic dominance (recovery state). Lower HRV indicates sympathetic dominance (stress/underrecovery). HRV monitoring can objectively guide training intensity decisions: low HRV = reduce intensity, maintain volume; very low HRV = active recovery only. Free apps (HRV4Training, Elite HRV) make daily HRV monitoring accessible.'
      },
      {
        heading: 'Active vs. Passive Recovery',
        text: 'Passive rest (complete inactivity) is rarely optimal for recovery between sessions. Light movement increases blood flow to muscles and connective tissue, accelerating waste product clearance and nutrient delivery. Active recovery — light walking, swimming, yoga at 40-60% of maximum heart rate — produces faster recovery than complete rest for most athletes. For calisthenics practitioners, rest days should include the daily mobility routine plus light movement. True passive rest (no movement) is appropriate only for acute injuries.'
      },
      {
        heading: 'The Stress-Recovery-Adaptation Cycle',
        text: 'Every training session is a managed stress. The body does not improve during training — it improves during recovery from training. Advanced calisthenics athletes understand that training hard is only half the equation; managing recovery is the other half. Chronic training without adequate recovery leads to overreaching (short-term) and overtraining syndrome (longer-term) — both characterized by declining performance, mood disturbance, poor sleep, and eventual immune suppression. The elite calisthenics mindset treats recovery as seriously as the training itself.'
      }
    ]
  }
];

export const ScienceView: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(scienceTopics[0].id);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const topic = scienceTopics.find(t => t.id === activeTopic) || scienceTopics[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>Sports Science</h1>
        <p className="mt-1 calix-muted">
          The deep science behind calisthenics — physiology, neuroscience, biomechanics, and recovery
        </p>
      </div>

      <div className="p-4 rounded-2xl"
        style={{ backgroundColor: 'rgba(0,204,255,0.07)', border: '1px solid rgba(0,204,255,0.2)' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--calix-text)' }}>
          <strong style={{ color: '#00ccff' }}>Why science matters in calisthenics:</strong> Understanding the principles behind the training
          transforms blind practice into intelligent programming. When you understand that tendons adapt 3x slower than muscles,
          you stop rushing progressions. When you understand motor learning theory, you stop training skills when fatigued.
          Knowledge is the multiplier on all training effort.
        </p>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {scienceTopics.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTopic(t.id)}
            className="p-4 rounded-2xl text-left transition-all card-hover"
            style={{
              backgroundColor: activeTopic === t.id ? 'rgba(108,99,255,0.15)' : 'var(--calix-surface)',
              border: `1px solid ${activeTopic === t.id ? 'var(--calix-accent)' : 'var(--calix-border)'}`,
            }}
          >
            <div className="text-2xl mb-2">{t.icon}</div>
            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--calix-accent)' }}>
              {t.category}
            </div>
            <div className="font-bold text-sm" style={{ color: 'var(--calix-text)' }}>{t.title}</div>
            <div className="text-xs mt-1 calix-muted">{t.summary}</div>
          </button>
        ))}
      </div>

      {/* Topic Detail */}
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <div className="p-6" style={{ borderBottom: '1px solid var(--calix-border)' }}>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{topic.icon}</span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--calix-accent)' }}>
                {topic.category}
              </div>
              <h2 className="text-2xl font-black" style={{ color: 'var(--calix-text)' }}>{topic.title}</h2>
              <p className="text-sm mt-1 calix-muted">{topic.summary}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          {topic.content.map((section, i) => (
            <div key={i} className="rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--calix-border)' }}>
              <button
                className="w-full p-4 text-left flex items-center justify-between"
                style={{ backgroundColor: 'var(--calix-surface2)' }}
                onClick={() => setExpandedSection(expandedSection === `${topic.id}-${i}` ? null : `${topic.id}-${i}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: 'var(--calix-accent)' }}>
                    {i + 1}
                  </div>
                  <span className="font-bold text-sm" style={{ color: 'var(--calix-text)' }}>{section.heading}</span>
                </div>
                <span className="calix-muted">{expandedSection === `${topic.id}-${i}` ? '▲' : '▼'}</span>
              </button>

              {expandedSection === `${topic.id}-${i}` && (
                <div className="p-5">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--calix-text)', lineHeight: '1.8' }}>
                    {section.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Principles Summary */}
      <div className="p-6 rounded-2xl"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--calix-text)' }}>
          The 10 Inviolable Principles of Elite Calisthenics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { num: '01', principle: 'Skills require neural freshness — train them first, always.' },
            { num: '02', principle: 'Tendons adapt 3x slower than muscles — never rush progressions.' },
            { num: '03', principle: 'Perfect form > more reps. Always. No exceptions.' },
            { num: '04', principle: 'Mobility work done daily compounds into extraordinary range over months.' },
            { num: '05', principle: 'Sleep is when adaptation happens — 7-9 hours is non-negotiable.' },
            { num: '06', principle: 'Deload weeks are not rest — they are when consolidation occurs.' },
            { num: '07', principle: 'Pushing and pulling volume must be balanced for joint longevity.' },
            { num: '08', principle: 'Pain is information — sharp joint pain means stop immediately.' },
            { num: '09', principle: 'Consistency over intensity — 3 days per week for 2 years beats 7 days for 3 months.' },
            { num: '10', principle: 'Film your training — what feels correct often looks wrong.' },
          ].map(item => (
            <div key={item.num} className="flex items-start gap-3 p-3 rounded-xl"
              style={{ backgroundColor: 'var(--calix-surface2)' }}>
              <div className="font-black text-xs flex-shrink-0" style={{ color: 'var(--calix-accent)', minWidth: '28px' }}>
                {item.num}
              </div>
              <div className="text-sm" style={{ color: 'var(--calix-text)' }}>{item.principle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
