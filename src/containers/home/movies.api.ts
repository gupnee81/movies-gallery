import { get } from 'Utils/restApi';
import { constants } from 'Utils/constants';

export const OMDbApi = async (searchString: string) => {
  const OMDbApiUrl = constants.BASE_URL + searchString;

  let result: any;
  result = await get({
    url: OMDbApiUrl,
  });

  return result;
};
