// A fast/incomplete adaptation of the one used by Drupal: https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Html.php/function/Html%3A%3AcleanCssIdentifier/8.6.x
// @todo: Make this work exactly like the drupal one.
export function cleanCssIdentifier(identifier: string) {

  identifier = identifier.replace(' ', '-');
  identifier = identifier.replace('_', '-');
  identifier = identifier.replace('/', '-');
  identifier = identifier.replace('[', '-');
  identifier = identifier.replace(']', '');

// Valid characters in a CSS identifier are:
  // - the hyphen (U+002D)
  // - a-z (U+0030 - U+0039)
  // - A-Z (U+0041 - U+005A)
  // - the underscore (U+005F)
  // - 0-9 (U+0061 - U+007A)
  // - ISO 10646 characters U+00A1 and higher
  // We strip out any character not in the above list.
  identifier = identifier.replace('/[^\\x{002D}\\x{0030}-\\x{0039}\\x{0041}-\\x{005A}\\x{005F}\\x{0061}-\\x{007A}\\x{00A1}-\\x{FFFF}]/u', '');

  // Identifiers cannot start with a digit, two hyphens, or a hyphen followed by a digit.
  identifier = identifier.replace('/^[0-9]/','-');
  identifier = identifier.replace('/^(-[0-9])|^(--)/','--');

  return identifier;

}
