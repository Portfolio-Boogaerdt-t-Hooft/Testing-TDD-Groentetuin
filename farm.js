// Test werkend krijgen 1
const get_yield_for_plant = (plant) => plant.yield

// Test werkend krijgen 2
const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

// Test werkend krijgen 3
const get_total_yield = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return yieldFromAllCrops.reduce((a, b) => a + b)
};

// 1e opdracht 
const get_costs_for_plant = input => input.costs;

const get_costs_for_crop = (input) => {
    const costs_for_plant = get_costs_for_plant(input.crop);
    const costs_for_crop = costs_for_plant * input.num_crops;
    return costs_for_crop;
}

// 2e opdracht
const get_revenue_for_plant = (plant) => {
    return plant.sale_price * plant.yield;
}
const get_revenue_for_crop = (input) => {
    const revenue_for_plant = get_revenue_for_plant(input.crop);
    const revenue_for_crop = revenue_for_plant * input.num_crops;
    return revenue_for_crop;
}

// 3e Opdracht
const get_profit_for_plant = (plant) => {
    return get_revenue_for_plant(plant) - get_costs_for_plant(plant);
}
const get_profit_for_crop = (input) => {
    const profit_for_plant = get_profit_for_plant(input.crop);
    const profit_for_crop = profit_for_plant * input.num_crops;
    return profit_for_crop;
}
const get_total_profit = (input) => {
    let total_profit = 0;
    input.crops.forEach(crop => {
        total_profit += get_profit_for_crop(crop);
    });
    return total_profit;
}

// Opdracht 4
const get_yield_for_plant_with_factors = (plant, factors) => {
    const plantYieldNoFactors = plant.yield;
    const environmentFactorSun = factors.sun;
    const environmentFactorWind = factors.wind;
    const plantFactorSun = plant.factors.sun[environmentFactorSun];
    const plantFactorWind = plant.factors.wind[environmentFactorWind];
    let plantYieldWithSunFactor = 0;
    let plantYieldWithWindFactor = 0;
    if (plantFactorSun === 0) {
        plantYieldWithSunFactor = plantYieldNoFactors;
    }
    else if (Math.sign(plantFactorSun) === 1) {
        plantYieldWithSunFactor = ((plantFactorSun / 100) * plantYieldNoFactors) + plantYieldNoFactors;
    }
    else {
        plantYieldWithSunFactor = (plantYieldNoFactors * (plantFactorSun / 100)) + plantYieldNoFactors;
    }
    if (plantFactorWind === 0) {
        plantYieldWithWindFactor = plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    else if (Math.sign(plantFactorWind) === 1) {
        plantYieldWithWindFactor = ((plantFactorWind / 100) * plantYieldWithSunFactor) + plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    else {
        plantYieldWithWindFactor = (plantYieldWithSunFactor * (plantFactorWind / 100)) + plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }

}

// Opdracht 5
const get_yield_for_crop_with_factors = (input, factors) => {
    const yield_for_plant_with_factors = get_yield_for_plant_with_factors(input.crop, factors);
    const yield_for_crop_with_factors = yield_for_plant_with_factors * input.num_crops;
    return yield_for_crop_with_factors;
}

// Opdracht 6
const get_revenue_for_plant_with_factors = (plant, factors) => {
    return plant.sale_price * get_yield_for_plant_with_factors(plant, factors);
}
const get_profit_for_plant_with_factors = (plant, factors) => {
    return get_revenue_for_plant_with_factors(plant, factors) - get_costs_for_plant(plant);
}
const get_profit_for_crop_with_factors = (input, factors) => {
    const profit_for_plant_with_factors = get_profit_for_plant_with_factors(input.crop, factors);
    const profit_for_crop_with_factors = profit_for_plant_with_factors * input.num_crops;
    return profit_for_crop_with_factors;
}
const get_total_profit_with_factors = (input, factors) => {
    let total_profit_with_factors = 0;
    input.crops.forEach(crop => {
        total_profit_with_factors += get_profit_for_crop_with_factors(crop, factors);
    });
    return total_profit_with_factors;
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_costs_for_plant,
    get_revenue_for_crop,
    get_revenue_for_plant,
    get_profit_for_plant,
    get_profit_for_crop,
    get_total_profit,
    get_yield_for_plant_with_factors,
    get_yield_for_crop_with_factors,
    get_profit_for_plant_with_factors,
    get_profit_for_crop_with_factors,
    get_total_profit_with_factors,
};