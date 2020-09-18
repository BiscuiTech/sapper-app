import ColorModeSwitch from './ColorModeSwitch.svelte'

export default {
  title: 'ColorModeSwitch'
}

// default state
export const Default = () => ({
  Component: ColorModeSwitch,
  props: {
    darkMode: false,
  },
  /* on: {
    ...actionsData,
  }, */
});