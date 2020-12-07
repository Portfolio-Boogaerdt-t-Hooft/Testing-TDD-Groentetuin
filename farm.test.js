const {
  get_yield_for_plant,
  get_yield_for_crop,
  get_total_yield,
  get_costs_for_crop,
  get_costs_for_plant,
  get_revenue_for_crop,
  get_revenue_for_plant,
  get_total_profit,
  get_profit_for_plant,
  get_profit_for_crop,
  get_yield_for_plant_with_factors,
  get_yield_for_crop_with_factors,
  get_profit_for_crop_with_factors,
  get_total_profit_with_factors,
} = require("./farm");

// test werkend krijgen 1
describe("get_yield_for_plant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };
  test("Get yield for plant with no environment factors", () => {
    expect(get_yield_for_plant(corn)).toBe(30);
  });
});

// test werkend krijgen 2
describe("get_yield_for_crop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_yield_for_crop(input)).toBe(30);
  });
});

// test werkend krijgen 3
describe("get_total_yield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(get_total_yield({ crops })).toBe(23);
  });
  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, num_crops: 0 }];
    expect(get_total_yield({ crops })).toBe(0);
  });
});

// Opdracht 1
describe("get_costs_for_plant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    costs: 15,
  };
  test("Get costs for one seed", () => {
    expect(get_costs_for_plant(corn)).toBe(15);
  });
});
describe("get_costs_for_crop", () => {
  test("Get costs for crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 1,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_costs_for_crop(input)).toBe(10);
  });
});

// Opdracht 2
describe("get_revenue_for_plant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    costs: 15,
    sale_price: 5,
  };
  test("Get revenue for one plant", () => {
    expect(get_revenue_for_plant(corn)).toBe(150);
  });
});
describe("get_revenue_for_crop", () => {
  test("Get revenue for crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 1,
      sale_price: 2,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_revenue_for_crop(input)).toBe(60);
  });
});

// Opdracht 3
describe("get_profit_for_plant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    costs: 15,
    sale_price: 5,
  };
  test("Get profit for one plant", () => {
    expect(get_profit_for_plant(corn)).toBe(135);
  });
});
describe("get_profit_for_crop", () => {
  test("Get profit for crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 1,
      sale_price: 2,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_profit_for_crop(input)).toBe(50);
  });
});
describe("get_total_profit", () => {
  test("Calculate total profit with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 1,
      sale_price: 2,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      costs: 2,
      sale_price: 2,
    };
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(get_total_profit({ crops })).toBe(37);
  });
});

// Opdracht 4
describe("get_yield_for_plant_with_factors", () => {
  const corn = {
    name: "corn",
    yield: 100,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 0,
        medium: -30,
        high: -60,
      },
    },
  };
  const environment_factors_low = {
    sun: "low",
    wind: "low"
  };
  const environment_factors_high = {
    sun: "high",
    wind: "low"
  };
  test("Get yield for plant with factors: sun = low, wind = low", () => {
    expect(get_yield_for_plant_with_factors(corn, environment_factors_low)).toBe(50);
  });
  test("Get yield for plant with factors: sun = high, wind = low", () => {
    expect(get_yield_for_plant_with_factors(corn, environment_factors_high)).toBe(150);
  });
});

// Opdracht 5
describe("get_yield_for_crop_with_factors", () => {
  const corn = {
    name: "corn",
    yield: 100,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 0,
        medium: -30,
        high: -60,
      },
    },
  };
  const environment_factors_low = {
    sun: "low",
    wind: "low"
  };
  const environment_factors_high = {
    sun: "high",
    wind: "low"
  };
  const input = {
    crop: corn,
    num_crops: 10,
  };
  test("Get yield for crop with factors: sun = low, wind = low", () => {
    expect(get_yield_for_crop_with_factors(input, environment_factors_low)).toBe(500);
  });
  test("Get yield for crop with factors: sun = high, wind = low", () => {
    expect(get_yield_for_crop_with_factors(input, environment_factors_high)).toBe(1500);
  });
});


// Opdracht 6
describe("get_profit_for_crop_with_factors", () => {
  const corn = {
    name: "corn",
    yield: 100,
    costs: 50,
    sale_price: 25,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 0,
        medium: -30,
        high: -60,
      },
    },
  };
  const environment_factors_low = {
    sun: "low",
    wind: "low"
  };
  const environment_factors_high = {
    sun: "high",
    wind: "low"
  };
  const input = {
    crop: corn,
    num_crops: 10,
  };
  test("Get profit for crop with factors: sun = low, wind = low", () => {
    expect(get_profit_for_crop_with_factors(input, environment_factors_low)).toBe(12000);
  });
  test("Get profit for crop with factors: sun = high, wind = low", () => {
    expect(get_profit_for_crop_with_factors(input, environment_factors_high)).toBe(37000);
  });
});
describe("get_total_profit_with_factors", () => {
  test("Calculate total profit with multiple crops with factors: sun = low, wind = low", () => {
    const corn = {
      name: "corn",
      yield: 100,
      costs: 50,
      sale_price: 25,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: -30,
          high: -60,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 10,
      costs: 5,
      sale_price: 2,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: 0,
          high: -50,
        },
      },
    };
    const environment_factors_low = {
      sun: "low",
      wind: "low"
    };
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(get_total_profit_with_factors({ crops }, environment_factors_low)).toBe(6010);
  });
  test("Calculate total profit with multiple crops with factors: sun = high, wind = low", () => {
    const corn = {
      name: "corn",
      yield: 100,
      costs: 50,
      sale_price: 25,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: -30,
          high: -60,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 10,
      costs: 5,
      sale_price: 2,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: 0,
          high: -50,
        },
      },
    };
    const environment_factors_high = {
      sun: "high",
      wind: "low"
    };
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(get_total_profit_with_factors({ crops }, environment_factors_high)).toBe(18550);
  });
  test("Calculate total profit with 0 amount with factors: sun = low, wind = low", () => {
    const corn = {
      name: "corn",
      yield: 100,
      costs: 50,
      sale_price: 25,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: -30,
          high: -60,
        },
      },
    };
    const environment_factors_low = {
      sun: "low",
      wind: "low"
    };
    const crops = [{ crop: corn, num_crops: 0 }];
    expect(get_total_profit_with_factors({ crops }, environment_factors_low)).toBe(0);
  });
})