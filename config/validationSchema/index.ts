import { DEVELOPMENT, PRODUCTION } from '@/constant';
import { CONFIG_ENUM } from '@/enum';
import * as Joi from 'joi';

export default Joi.object({
  [CONFIG_ENUM.NODE_ENV]: Joi.string().valid(DEVELOPMENT, PRODUCTION),
  [CONFIG_ENUM.DATABASE]: Joi.string(),
  [CONFIG_ENUM.HOST]: Joi.string(),
  [CONFIG_ENUM.TYPE]: Joi.string().valid('mysql'),
  [CONFIG_ENUM.PASSWORD]: Joi.string(),
  [CONFIG_ENUM.USERNAME]: Joi.string(),
  [CONFIG_ENUM.PORT]: Joi.number(),
});
