// Which structured content each subject slug has. The subject pages and the global
// search both read from here, so a subject registered once is searchable the moment
// its page renders. Quizzes stay in the notes page: nothing else needs them.

import { NotesData } from './notes-types'
import { OlePrepData } from './ole-prep-types'

import physioNotes from '@/data/notes/physiologic-optics'
import bvNotes from '@/data/notes/binocular-vision'
import theoreticalOpticsNotes from '@/data/notes/theoretical-optics'
import phorometryNotes from '@/data/notes/phorometry'
import primaryEyeCareNotes from '@/data/notes/primary-eye-care'
import { ocularAnatomyNotes } from '@/data/notes/ocular-anatomy'
import { generalAnatomyNotes } from '@/data/notes/general-anatomy'
import { ocularDiseaseNotes } from '@/data/notes/ocular-disease'
import { generalPharmacologyNotes } from '@/data/notes/general-pharmacology'
import { ocularPharmacologyNotes } from '@/data/notes/ocular-pharmacology'
import { practicalMechanicalOpticsNotes } from '@/data/notes/practical-mechanical-optics'
import { lowVisionNotes } from '@/data/notes/low-vision'
import { pediatricOptometryNotes } from '@/data/notes/pediatric-optometry'
import { contactLensNotes } from '@/data/notes/contact-lens'
import { ethicsAndJurisprudenceNotes } from '@/data/notes/ethics-and-jurisprudence'

import physiologicOpticsPrep from '@/data/ole-prep/physiologic-optics'
import binocularVisionPrep from '@/data/ole-prep/binocular-vision'
import theoreticalOpticsPrep from '@/data/ole-prep/theoretical-optics'
import phorometryPrep from '@/data/ole-prep/phorometry'
import primaryEyeCarePrep from '@/data/ole-prep/primary-eye-care'
import { ocularAnatomyData } from '@/data/ole-prep/ocular-anatomy'
import { generalAnatomyData } from '@/data/ole-prep/general-anatomy'
import { ocularDiseaseData } from '@/data/ole-prep/ocular-disease'
import { generalPharmacologyData } from '@/data/ole-prep/general-pharmacology'
import { ocularPharmacologyData } from '@/data/ole-prep/ocular-pharmacology'
import { practicalMechanicalOpticsData } from '@/data/ole-prep/practical-mechanical-optics'
import { optometryConstantsData } from '@/data/ole-prep/optometry-constants'
import { lowVisionData } from '@/data/ole-prep/low-vision'
import { pediatricOptometryData } from '@/data/ole-prep/pediatric-optometry'
import { contactLensData } from '@/data/ole-prep/contact-lens'
import { ethicsAndJurisprudenceData } from '@/data/ole-prep/ethics-and-jurisprudence'

export const NOTES_MAP: Record<string, NotesData> = {
  'physiologic-optics': physioNotes,
  'binocular-vision': bvNotes,
  'theoretical-optics': theoreticalOpticsNotes,
  'phorometry': phorometryNotes,
  'primary-eye-care': primaryEyeCareNotes,
  'ocular-anatomy': ocularAnatomyNotes,
  'general-anatomy': generalAnatomyNotes,
  'ocular-disease': ocularDiseaseNotes,
  'general-pharmacology': generalPharmacologyNotes,
  'ocular-pharmacology': ocularPharmacologyNotes,
  'practical-mechanical-optics': practicalMechanicalOpticsNotes,
  'low-vision': lowVisionNotes,
  'pediatric-optometry': pediatricOptometryNotes,
  'contact-lens': contactLensNotes,
  'ethics-and-jurisprudence': ethicsAndJurisprudenceNotes,
}

export const OLE_PREP_MAP: Record<string, OlePrepData> = {
  'physiologic-optics': physiologicOpticsPrep,
  'binocular-vision': binocularVisionPrep,
  'theoretical-optics': theoreticalOpticsPrep,
  'phorometry': phorometryPrep,
  'primary-eye-care': primaryEyeCarePrep,
  'ocular-anatomy': ocularAnatomyData,
  'general-anatomy': generalAnatomyData,
  'ocular-disease': ocularDiseaseData,
  'general-pharmacology': generalPharmacologyData,
  'ocular-pharmacology': ocularPharmacologyData,
  'practical-mechanical-optics': practicalMechanicalOpticsData,
  'optometry-constants': optometryConstantsData,
  'low-vision': lowVisionData,
  'pediatric-optometry': pediatricOptometryData,
  'contact-lens': contactLensData,
  'ethics-and-jurisprudence': ethicsAndJurisprudenceData,
}
