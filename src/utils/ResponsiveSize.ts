import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type DimensionType = {
  height: number;
  width: number;
};

/**
 *
 * @param dimensions Dimension Type {height, width}
 * @returns resolution (pythagoream theorem)
 */
const getResolution = ({height, width}: DimensionType) =>
  Math.sqrt(height * height + width * width);

// Dimensions of current device
const dimensions = Dimensions.get('screen');
const CURRENT_RESOLUTION = getResolution(dimensions);

// Referencing iPhoneXS/X/11Pro as per the designs
const designSize = {
  height: 812,
  width: 375,
};
const DESIGN_RESOLUTION = Math.sqrt(
  designSize.height * designSize.height + designSize.width * designSize.width,
);

const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;

/**
 * Returns responsive size for the provided size
 * @param size Number of pixels
 * @returns Responsive value
 */
const rs = (size: number) => RESOLUTIONS_PROPORTION * size;

export {wp, hp, rs};
