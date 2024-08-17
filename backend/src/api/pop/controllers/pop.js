'use strict';

/**
 * pop controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pop.pop', ({strapi}) => ({
    async findOne(ctx) {
        const {id} = ctx.params;

        const entity = await strapi.query('api::pop.pop').findOne({
            where: {slug: id},
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
