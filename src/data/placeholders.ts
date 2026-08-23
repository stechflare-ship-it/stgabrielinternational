export const getPlaceholder = (text: string, width = 800, height = 600, bg = '0A192F', color = '5CE1E6') =>
  `https://placehold.co/${width}x${height}/${bg}/${color}?text=${encodeURIComponent(text)}`;

export const advanceLevel = getPlaceholder('A-Level+Studies', 800, 600, '0A192F', 'D4AF37');
export const BritishLevel = getPlaceholder('British+IGCSE', 800, 600, '0A192F', '5CE1E6');
export const earlyYearLevel = getPlaceholder('EYFS+Early+Years', 800, 600, '0A192F', 'D4AF37');
export const internationalLevel = getPlaceholder('British+Primary', 800, 600, '0A192F', '5CE1E6');
export const lowerSecondarLevel = getPlaceholder('Lower+Secondary', 800, 600, '0A192F', 'D4AF37');
export const compLab = getPlaceholder('STEM+Robotics+ICT+Lab', 800, 600, '0A192F', '5CE1E6');
export const classroom = getPlaceholder('Classroom+Excellence', 800, 600, '0A192F', 'D4AF37');

// Gallery placeholders
export const artsClub = getPlaceholder('Creative+Arts+Drama', 800, 600, '0A192F', '5CE1E6');
export const athletics = getPlaceholder('Track+and+Field+Athletics', 800, 600, '0A192F', 'D4AF37');
export const graduation = getPlaceholder('Distinction+Graduation', 800, 600, '0A192F', '5CE1E6');
export const musicBand = getPlaceholder('Orchestral+Brass+Band', 800, 600, '0A192F', 'D4AF37');
export const schoolBus = getPlaceholder('School+Transport+Fleet', 800, 600, '0A192F', '5CE1E6');
export const schoolUniform = getPlaceholder('Official+School+Uniform', 800, 600, '0A192F', 'D4AF37');
export const sereneSpace = getPlaceholder('Campus+Gardens+and+Study', 800, 600, '0A192F', '5CE1E6');
export const sports = getPlaceholder('Sports+and+Football+League', 800, 600, '0A192F', 'D4AF37');

// Leadership placeholders (5 Leaders: Director, Vice Director, Manager, Chief Principal, Principal)
export const leadershipDirector = getPlaceholder('Mrs.+Elizabeth+Ndung%27u%0ASchool+Director', 600, 750, '0A192F', 'D4AF37');
export const leadershipViceDirector = getPlaceholder('Dr.+Francis+Ndung%27u%0AVice+Director', 600, 750, '0A192F', '5CE1E6');
export const leadershipManager = getPlaceholder('Mrs.+Margaret+Kamau%0ASchool+Manager', 600, 750, '0A192F', 'D4AF37');
export const leadershipChiefPrincipal = getPlaceholder('Mr.+Nicholas%0AChief+Principal', 600, 750, '0A192F', '5CE1E6');
export const leadershipPrincipal = getPlaceholder('Mr.+Peter+Mwangi%0APrincipal', 600, 750, '0A192F', 'D4AF37');

// Faculty Staff Placeholders
export const peter = getPlaceholder('Mr.+Peter+Mwangi%0AVice+Principal', 600, 750, '0A192F', 'D4AF37');
export const maina = getPlaceholder('Mr.+Maina%0AHead+of+Boarding', 600, 750, '0A192F', '5CE1E6');
export const jamesImg = getPlaceholder('Mr.+James+Kiptoo%0ACo-Curricular+Head', 600, 750, '0A192F', 'D4AF37');
export const beatrice = getPlaceholder('Mrs.+Beatrice+Chepkemoi%0AEYFS+Lead', 600, 750, '0A192F', '5CE1E6');
export const john = getPlaceholder('Mr.+John+Kariuki%0ASTEM+Lead', 600, 750, '0A192F', 'D4AF37');
export const mercy = getPlaceholder('Ms.+Mercy+Achieng%0ALanguages+Lead', 600, 750, '0A192F', '5CE1E6');
export const david = getPlaceholder('Mr.+David+Omondi%0AMathematics+Head', 600, 750, '0A192F', 'D4AF37');
export const grace = getPlaceholder('Mrs.+Grace+Wanjiku%0AMusic+%26+Arts+Lead', 600, 750, '0A192F', '5CE1E6');
export const samuel = getPlaceholder('Mr.+Samuel+Kiprotich%0AHumanities+Lead', 600, 750, '0A192F', 'D4AF37');
export const faith = getPlaceholder('Ms.+Faith+Mutua%0AScience+Faculty', 600, 750, '0A192F', '5CE1E6');
export const emmanuel = getPlaceholder('Mr.+Emmanuel+Korir%0AAthletics+Coach', 600, 750, '0A192F', 'D4AF37');
export const catherine = getPlaceholder('Mrs.+Catherine+Njeri%0APastoral+Care', 600, 750, '0A192F', '5CE1E6');

export const PLACEHOLDER_IMAGE = getPlaceholder('St.+Gabriel+International+School', 800, 600, '0A192F', 'D4AF37');
export const PLACEHOLDER_CLASSROOM = getPlaceholder('Classroom+Study', 800, 600, '0A192F', '5CE1E6');
export const PLACEHOLDER_ARTS = getPlaceholder('Performing+Arts', 800, 600, '0A192F', 'D4AF37');
export const PLACEHOLDER_GRADUATION = getPlaceholder('Graduation+and+Distinctions', 800, 600, '0A192F', '5CE1E6');
export const PLACEHOLDER_ICT = getPlaceholder('STEM+and+Computer+Lab', 800, 600, '0A192F', 'D4AF37');
