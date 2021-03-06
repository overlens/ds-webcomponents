import '../../components/Button/'

export default {
  title: 'Base Components/Button',
  argTypes: {
    variant: {
      options: ['basic', 'primary', 'secundary', 'tertiary', 'danger', 'disable'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    }
  },
}

export const Button = ({ variant, size }) => `
  <lens-button 
    variant="${variant}" 
    size="${size}"
    onclick="console.log('Clicou!')"
  >
    Button
  </lens-button>
`
