interface Component {
  region: string;
  weight: number;
}

export function componentsByRegion(components: Array<Component> ,region: string) {

  // Get all the components for  the matching regions
  const result = components.filter(component => component.region == region)

  // Make sure they are sorted by weight.
  result.sort((a, b) => {
    return a.weight - b.weight;
  })

  return result;

}
