const Colors = {
  neutral: {
    '0': '#FFFFFF',
    '2': '#333333',
    '3': '#f9fafa',
    '4': '#f0f0f0',
    '5': '#F1F2F3',
    '10': '#E3E6E8',
    '15': '#CCCCCC',
    '20': '#C7CED1',
    '25': '#C4C4C4',
    '30': '#ABB5BA',
    '40': '#8F9CA3',
    '50': '#73848C',
    '60': '#5C6970',
    '70': '#454F54',
    '80': '#2F3639',
    '90': '#171A1C',
    '100': '#000',
    '110': '#555',
    '120': 'rgba(59, 59, 59, 0.2)',
  },
  transparency: {
    '10': 'rgba(10, 10, 10, 0.3)',
    '20': 'rgba(0, 0, 0, 0.1)',
    '50': 'rgba(34, 41, 47, 0.5)',
  },
  green: {
    '10': '#D6F5E0',
    '15': '#C2F0D1',
    '30': '#85E0A3',
    '40': '#32943f',
    '60': '#29A352',
  },
  brand: {
    '5': '#E8E8FC',
    '10': '#1071ca',
    '15': '#B8BEF9',
    '20': '#cccccc',
    '50': '#187fde',
    '60': '#1717CF',
    '70': '#1414B8',
    '80': '#101240',
  },
  red: {
    '10': '#FAD1D1',
    '20': '#F5A3A3',
    '50': '#E51A1A',
    '55': '#CF1717',
    '60': '#B81414',
  },
  yellow: {
    '10': '#fafcf4',
    '20': '#FFDD57',
    '30': '#ffce0c',
  },
  blue: {
    '10': '#e3f2fd',
    '20': '#bbdefb',
    '30': '#90caf9',
    '40': '#64b5f6',
    '45': '#187fde',
    '50': '#5B67E3',
  },
};

const theme = {
  link: {
    color: Colors.brand[50],
    hoverColor: Colors.brand[60],
  },
  hr: {
    backgroundColor: Colors.neutral[5],
  },
  code: {
    backgroundColor: Colors.neutral[5],
    color: Colors.red[55],
  },
  list: {
    label: {
      color: Colors.neutral[50],
    },
    meta: {
      color: Colors.neutral[30],
    },
  },
  text: {
    secondary: Colors.neutral[60],
  },
  progressBar: {
    backgroundColor: Colors.neutral[3],
    compleatedColor: Colors.green[40],
    borderColor: Colors.neutral[10],
  },
  layout: {
    backgroundColor: Colors.neutral[0],
    minWidth: '1200px',
    navBarWidth: '251px',
    navBarHeight: '70px',
    rightSidebarWidth: '70vw',
    filtersSidebarWidth: '250px',

    stuffColor: Colors.neutral[5],
    stuffBorderColor: Colors.neutral[10],
    overlay: {
      backgroundColor: Colors.neutral[100],
    },
    socialLink: {
      color: Colors.neutral[20],
    },
  },
  pageHeading: {
    height: '64px',
    dividerColor: Colors.neutral[30],
    backLink: {
      color: {
        normal: Colors.brand[70],
        hover: Colors.brand[60],
      },
    },
  },
  panelColor: Colors.neutral[0],
  connectEditWarning: Colors.yellow[10],
  dropdown: {
    backgroundColor: Colors.neutral[0],
    borderColor: Colors.neutral[5],
    shadow: Colors.transparency[20],
    item: {
      color: {
        danger: Colors.red[50],
      },
      backgroundColor: {
        default: Colors.neutral[0],
        hover: Colors.neutral[5],
      },
    },
  },
  ksqlDb: {
    query: {
      editor: {
        readonly: {
          background: Colors.neutral[3],
          selection: {
            backgroundColor: 'transparent',
          },
          cursor: {
            color: 'transparent',
          },
        },
      },
    },
  },
  heading: {
    h1: {
      color: Colors.neutral[90],
    },
    h3: {
      color: Colors.neutral[50],
      fontSize: '24px',
    },
    base: {
      fontFamily: 'Titillium Web, sans-serif, Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 500,
      color: Colors.neutral[100],
    },
    variants: {
      1: {
        fontSize: '35px',
        lineHeight: '60px',
      },
      2: {
        fontSize: '30px',
        lineHeight: '45px',
      },
      3: {
        fontSize: '24px',
        lineHeight: '36px',
        fontWeight: 400,
        marginBottom: '16px',
      },
      4: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 500,
      },
      5: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      6: {
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
  },
  lastestVersionItem: {
    metaDataLabel: {
      color: Colors.neutral[50],
    },
  },
  alert: {
    color: {
      error: Colors.red[50],
      success: Colors.green[60],
      warning: Colors.yellow[30],
      info: Colors.brand[10],
      loading: Colors.neutral[10],
      blank: Colors.neutral[10],
      custom: Colors.neutral[10],
    },
    shadow: Colors.transparency[20],
  },
  circularAlert: {
    color: {
      error: Colors.red[50],
      success: Colors.green[40],
      warning: Colors.yellow[10],
      info: Colors.neutral[10],
    },
  },
  button: {
    primary: {
      backgroundColor: {
        normal: Colors.brand[50],
        hover: Colors.brand[10],
        active: Colors.brand[20],
        disabled: Colors.neutral[30],
      },
      color: Colors.neutral[0],
      invertedColors: {
        normal: Colors.brand[50],
        hover: Colors.brand[60],
        active: Colors.brand[60],
      },
    },
    secondary: {
      backgroundColor: {
        normal: Colors.neutral[2],
        hover: Colors.neutral[110],
        active: Colors.neutral[15],
      },
      color: Colors.neutral[0],
      isActiveColor: Colors.neutral[0],
      invertedColors: {
        normal: Colors.brand[50],
        hover: Colors.neutral[70],
        active: Colors.neutral[90],
      },
    },
    modal_close: {
      backgroundColor: {
        normal: Colors.neutral[0],
        hover: Colors.neutral[0],
        active: Colors.neutral[0],
      },
      color: Colors.neutral[90],
      isActiveColor: Colors.neutral[0],
      invertedColors: {
        normal: Colors.neutral[50],
        hover: Colors.neutral[70],
        active: Colors.neutral[90],
      },
    },
    modal_full: {
      backgroundColor: {
        normal: Colors.brand[50],
        hover: Colors.brand[10],
        active: Colors.brand[20],
        disabled: Colors.neutral[30],
      },
      color: Colors.neutral[0],
      invertedColors: {
        normal: Colors.brand[50],
        hover: Colors.brand[60],
        active: Colors.brand[60],
      },
    },
    modal_full_secon: {
      backgroundColor: {
        normal: Colors.neutral[2],
        hover: Colors.neutral[110],
        active: Colors.neutral[15],
      },
      color: Colors.neutral[0],
      isActiveColor: Colors.neutral[0],
      invertedColors: {
        normal: Colors.neutral[50],
        hover: Colors.neutral[70],
        active: Colors.neutral[90],
      },
    },
    danger: {
      backgroundColor: {
        normal: Colors.red[50],
        hover: Colors.red[55],
        active: Colors.red[60],
        disabled: Colors.red[20],
      },
      color: Colors.neutral[90],
      invertedColors: {
        normal: Colors.brand[50],
        hover: Colors.brand[60],
        active: Colors.brand[60],
      },
    },
    height: {
      S: '24px',
      M: '32px',
      L: '40px',
      F: '70px',
    },
    fontSize: {
      S: '14px',
      M: '14px',
      L: '17px',
      F: '24px',
    },
    border: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[70],
      active: Colors.neutral[90],
    },
  },
  menu: {
    backgroundColor: {
      normal: Colors.neutral[0],
      hover: Colors.neutral[3],
      active: Colors.neutral[5],
      primary: Colors.brand[80],
    },
    color: {
      white: Colors.neutral[0],
      backthree: Colors.neutral[2],
      normal: Colors.neutral[50],
      hover: Colors.neutral[70],
      active: Colors.brand[70],
      isOpen: Colors.neutral[90],
    },
    statusIconColor: {
      online: Colors.green[40],
      offline: Colors.red[50],
      initializing: Colors.yellow[20],
    },
    chevronIconColor: Colors.neutral[30],
  },
  version: {
    currentVersion: {
      color: Colors.neutral[30],
    },
    symbolWrapper: {
      color: Colors.neutral[30],
    },
  },
  schema: {
    backgroundColor: {
      tr: Colors.neutral[5],
      div: Colors.neutral[0],
    },
  },
  modal: {
    backgroundColor: Colors.neutral[0],
    border: {
      top: Colors.neutral[5],
      bottom: Colors.neutral[5],
      contrast: Colors.neutral[30],
    },
    overlay: Colors.transparency[10],
    shadow: Colors.transparency[20],
    deletionTextColor: Colors.neutral[70],
  },
  table: {
    actionBar: {
      backgroundColor: Colors.neutral[0],
    },
    th: {
      backgroundColor: {
        normal: Colors.neutral[0],
      },
      color: {
        sortable: Colors.neutral[30],
        normal: Colors.neutral[2],
        hover: Colors.neutral[100],
        active: Colors.brand[50],
      },
      previewColor: {
        normal: Colors.brand[50],
      },
    },
    td: {
      color: {
        normal: Colors.neutral[90],
      },
    },
    tr: {
      backgroundColor: {
        normal: Colors.neutral[0],
        hover: Colors.yellow[10],
      },
    },
    link: {
      color: {
        normal: Colors.neutral[90],
        hover: Colors.neutral[50],
        active: Colors.neutral[90],
      },
    },
    expander: {
      normal: Colors.brand[50],
      hover: Colors.brand[20],
      disabled: Colors.neutral[10],
    },
  },
  primaryTab: {
    height: '41px',
    color: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[90],
      active: Colors.neutral[2],
      disabled: Colors.neutral[30],
    },
    borderColor: {
      normal: 'transparent',
      hover: 'transparent',
      active: Colors.neutral[2],
      nav: Colors.neutral[25],
    },
  },
  secondaryTab: {
    backgroundColor: {
      normal: Colors.neutral[0],
      hover: Colors.neutral[5],
      active: Colors.neutral[10],
    },
    color: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[90],
      active: Colors.neutral[90],
    },
  },
  select: {
    backgroundColor: {
      normal: Colors.neutral[0],
      hover: Colors.neutral[10],
      active: Colors.neutral[10],
    },
    color: {
      normal: Colors.neutral[90],
      hover: Colors.neutral[90],
      active: Colors.neutral[90],
      disabled: Colors.neutral[30],
    },
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      active: Colors.neutral[70],
      disabled: Colors.neutral[10],
    },
    optionList: {
      scrollbar: {
        backgroundColor: Colors.neutral[120],
      },
    },
  },
  input: {
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      focus: Colors.neutral[70],
      disabled: Colors.neutral[10],
    },
    color: {
      placeholder: {
        normal: Colors.neutral[30],
        readOnly: Colors.neutral[30],
      },
      disabled: Colors.neutral[30],
      readOnly: Colors.neutral[90],
    },
    backgroundColor: {
      readOnly: Colors.neutral[5],
    },
    error: Colors.red[50],
    icon: {
      color: Colors.neutral[70],
    },
    label: {
      color: Colors.neutral[100],
    },
  },
  textArea: {
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      focus: Colors.neutral[70],
      disabled: Colors.neutral[10],
    },
    color: {
      placeholder: {
        normal: Colors.neutral[30],
        focus: {
          normal: 'transparent',
          readOnly: Colors.neutral[30],
        },
      },
      disabled: Colors.neutral[30],
      readOnly: Colors.neutral[90],
    },
    backgroundColor: {
      readOnly: Colors.neutral[5],
    },
  },
  tag: {
    backgroundColor: {
      green: Colors.green[40],
      gray: Colors.neutral[25],
      yellow: Colors.yellow[10],
      white: Colors.neutral[10],
      red: Colors.red[10],
      blue: Colors.blue[45],
    },
    color: Colors.neutral[0],
  },
  switch: {
    unchecked: Colors.brand[20],
    checked: Colors.brand[50],
    circle: Colors.neutral[0],
    disabled: Colors.neutral[10],
  },
  pageLoader: {
    borderColor: Colors.brand[50],
    borderBottomColor: Colors.neutral[0],
  },
  metrics: {
    backgroundColor: Colors.neutral[5],
    indicator: {
      backgroundColor: Colors.neutral[0],
      titleColor: Colors.neutral[50],
      warningTextColor: Colors.red[50],
      lightTextColor: Colors.neutral[20],
    },
    filters: {
      color: {
        icon: Colors.neutral[90],
        normal: Colors.neutral[50],
      },
    },
  },
  scrollbar: {
    trackColor: {
      normal: Colors.neutral[0],
      active: Colors.neutral[5],
    },
    thumbColor: {
      normal: Colors.neutral[0],
      active: Colors.neutral[50],
    },
  },
  consumerTopicContent: {
    backgroundColor: Colors.neutral[5],
  },
  topicFormLabel: {
    color: Colors.red[50],
  },
  topicMetaData: {
    backgroundColor: Colors.neutral[5],
    color: {
      label: Colors.neutral[50],
      value: Colors.neutral[80],
      meta: Colors.neutral[30],
    },
    liderReplica: {
      color: Colors.green[40],
    },
    outOfSync: {
      color: Colors.red[50],
    },
  },
  dangerZone: {
    borderColor: Colors.neutral[10],
    color: {
      title: Colors.red[50],
      warningMessage: Colors.neutral[50],
    },
  },
  configList: {
    color: Colors.neutral[30],
  },
  tooltip: {
    bg: Colors.neutral[90],
    text: Colors.neutral[0],
  },
  topicsList: {
    color: {
      normal: Colors.neutral[90],
      hover: Colors.neutral[50],
      active: Colors.neutral[90],
    },
    backgroundColor: {
      hover: Colors.neutral[5],
      active: Colors.neutral[10],
    },
  },
  icons: {
    chevronDownIcon: Colors.neutral[90],
    closeIcon: Colors.neutral[90],
    deleteIcon: Colors.red[20],
    warningIcon: Colors.yellow[20],
    messageToggleIcon: {
      normal: Colors.brand[50],
      hover: Colors.brand[20],
      active: Colors.brand[60],
    },
    verticalElipsisIcon: Colors.neutral[50],
    liveIcon: {
      circleBig: Colors.red[10],
      circleSmall: Colors.red[50],
    },
    newFilterIcon: Colors.brand[50],
    closeModalIcon: Colors.neutral[25],
    savedIcon: Colors.brand[50],
    dropdownArrowIcon: Colors.neutral[30],
    git: {
      hover: Colors.neutral[70],
      active: Colors.neutral[90],
    },
    discord: {
      hover: Colors.brand[15],
      active: Colors.blue[45],
    },
  },
  viewer: {
    wrapper: Colors.neutral[3],
  },
  savedFilterDivider: {
    color: Colors.neutral[15],
  },
  editFilterText: {
    color: Colors.brand[50],
  },
  statictics: {
    createdAtColor: Colors.neutral[50],
  },
  errorPage: {
    text: Colors.blue[45],
  },
};

export type ThemeType = typeof theme;

export default theme;
