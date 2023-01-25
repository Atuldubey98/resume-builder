import {
  ON_FIELD_CHANGE,
  ON_EXP_ADD,
  ON_EXP_CHANGE,
  ON_EDU_CHANGE,
  ON_PROJECT_CHANGE,
  ON_AWARDS_CHANGE,
  ON_VOLUNTEERING_CHANGE,
  ON_LANGUAGE_CHANGE,
  ON_SKILL_CHANGE,
  ON_EDU_ADD,
  ON_PROJECT_ADD,
  ON_AWARDS_ADD,
  ON_VOLUNTEERING_ADD,
  ON_SKILL_ADD,
  ON_LANGUAGE_ADD,
  ON_FIELD_REMOVE,
  ON_CONTACT_CHANGE,
  ON_FIELD_SET,
} from "../constants/formConstants";

export const formInitialState = {
  contact: {
    name: "",
    title: "",
    email: "",
    phone: "",
    social: "",
    location: "",
  },
  templateNumber: 0,
  profileSummary: "",
  experience: {
    id: 0,
    title: "",
    company: "",
    dates: "",
    location: "",
    description: "",
  },
  education: {
    id: 0,
    degree: "",
    area: "",
    school: "",
    dates: "",
    description: "",
  },
  project: {
    id: 0,
    title: "",
    type: "",
    dates: "",
    reason: "",
    description: "",
  },
  award: {
    id: 0,
    title: "",
    receivedFrom: "",
    dates: "",
    link: "",
    description: "",
  },
  volunteering: {
    id: 0,
    title: "",
    dates: "",
    organization: "",
    description: "",
  },
  skill: {
    id: 0,
    name: "",
    value: 0,
  },
  language: {
    id: 0,
    name: "",
    value: 0,
  },
  languages: [],
  skills: [],
  volunteerings: [],
  awards: [],
  edus: [],
  exps: [],
  projects: [],
};

export const formReducer = (state, action) => {
  const { name, formField, id, value } = action.payload;
  let index = -1;

  switch (action.type) {
    case ON_FIELD_SET: {
      return {
        ...state,
        [name]: state[formField].filter((field) => field.id === id)[0],
      };
    }
    case ON_FIELD_REMOVE: {
      if (Array.isArray(state[formField])) {
        return {
          ...state,
          [formField]: state[formField].filter((exp) => exp.id !== id),
        };
      } else if (typeof state[formField] === "string") {
        return {
          ...state,
          [formField]: "",
        };
      }
      return state;
    }
    case ON_FIELD_CHANGE:
      return {
        ...state,
        [name]: value,
      };
    case ON_CONTACT_CHANGE:
      return {
        ...state,
        contact: { ...state.contact, [name]: value },
      };
    case ON_EXP_ADD:
      index = state.exps.findIndex((exp) => exp.id === id);

      if (index === -1) {
        return {
          ...state,
          experience: formInitialState.experience,
          exps: [...state.exps, action.payload],
        };
      }
      state.exps[index] = action.payload;
      return {
        ...state,
        experience: formInitialState.experience,
      };
    case ON_EXP_CHANGE:
      return {
        ...state,
        experience: { ...state.experience, [name]: value },
      };
    case ON_EDU_CHANGE:
      return {
        ...state,
        education: { ...state.education, [name]: value },
      };
    case ON_EDU_ADD:
      index = state.edus.findIndex((exp) => exp.id === id);

      if (index === -1) {
        return {
          ...state,
          edus: [...state.edus, action.payload],
          education: formInitialState.education,
        };
      }
      state.edus[index] = action.payload;
      return {
        ...state,
        education: formInitialState.education,
      };
    case ON_PROJECT_CHANGE:
      return {
        ...state,
        project: { ...state.project, [name]: value },
      };
    case ON_PROJECT_ADD:
      index = state.projects.findIndex((exp) => exp.id === id);
      if (index === -1) {
        return {
          ...state,
          projects: [...state.projects, action.payload],
          project: formInitialState.project,
        };
      }
      state.projects[index] = action.payload;
      return {
        ...state,
        project: formInitialState.project,
      };
    case ON_AWARDS_CHANGE:
      return {
        ...state,
        award: { ...state.award, [name]: value },
      };
    case ON_AWARDS_ADD:
      index = state.awards.findIndex((exp) => exp.id === id);
      if (index === -1) {
        return {
          ...state,
          awards: [...state.awards, action.payload],
          award: formInitialState.award,
        };
      }
      state.awards[index] = action.payload;
      return {
        ...state,
        award: formInitialState.award,
      };
    case ON_VOLUNTEERING_CHANGE:
      return {
        ...state,
        volunteering: { ...state.volunteering, [name]: value },
      };
    case ON_VOLUNTEERING_ADD:
      index = state.volunteerings.findIndex((exp) => exp.id === id);

      if (index === -1) {
        return {
          ...state,
          volunteerings: [...state.volunteerings, action.payload],
          volunteering: formInitialState.volunteering,
        };
      }
      state.volunteerings[index] = action.payload;
      return {
        ...state,
        volunteering: formInitialState.volunteering,
      };
    case ON_SKILL_CHANGE:
      return {
        ...state,
        skill: { ...state.skill, [name]: value },
      };
    case ON_SKILL_ADD:
      index = state.skills.findIndex((exp) => exp.id === id);

      if (index === -1) {
        return {
          ...state,
          skills: [...state.skills, action.payload],
          skill: formInitialState.skill,
        };
      }
      state.skills[index] = action.payload;
      return {
        ...state,
        skill: formInitialState.skill,
      };
    case ON_LANGUAGE_CHANGE:
      return {
        ...state,
        language: { ...state.language, [name]: value },
      };
    case ON_LANGUAGE_ADD:
      index = state.languages.findIndex((exp) => exp.id === id);
      if (index === -1) {
        return {
          ...state,
          languages: [...state.languages, action.payload],
          langauge: formInitialState.language,
        };
      }
      state.languages[index] = action.payload;
      return {
        ...state,
        langauge: formInitialState.language,
      };
    default:
      break;
  }
};
