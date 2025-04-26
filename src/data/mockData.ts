import { Incident } from '../types';

export const mockIncidents: Incident[] = [
  {
    id: '1',
    title: 'Fill Mee',
    description: 'AI system filled inappropriate content into form fields without user consent.',
    severity: 'Low',
    reportedDate: new Date('2025-03-15')
  },
  {
    id: '2',
    title: 'Similar Amore',
    description: 'AI generated biased recommendations based on user similarity profiles.',
    severity: 'Medium',
    reportedDate: new Date('2025-04-01')
  },
  {
    id: '3',
    title: 'Binstemion',
    description: 'System made unauthorized binary decisions affecting user access rights.',
    severity: 'High',
    reportedDate: new Date('2025-04-10')
  },
  {
    id: '4',
    title: 'Varpostiont',
    description: 'Variable privacy settings were compromised during model training.',
    severity: 'Medium',
    reportedDate: new Date('2025-04-12')
  },
  {
    id: '5',
    title: 'Getnation',
    description: 'Model generated synthetic identities without appropriate safeguards.',
    severity: 'High',
    reportedDate: new Date('2025-04-15')
  },
  {
    id: '6',
    title: 'Adumpete for Severity',
    description: 'Algorithm dumped sensitive user data during severity assessment.',
    severity: 'High',
    reportedDate: new Date('2025-04-18')
  },
  {
    id: '7',
    title: 'Coepotiing',
    description: 'Competitive optimization led to exploitative system behaviors.',
    severity: 'Medium',
    reportedDate: new Date('2025-04-20')
  },
  {
    id: '8',
    title: 'Opteintine',
    description: 'Optional integrity checks were bypassed in production.',
    severity: 'Low',
    reportedDate: new Date('2025-04-22')
  }
];