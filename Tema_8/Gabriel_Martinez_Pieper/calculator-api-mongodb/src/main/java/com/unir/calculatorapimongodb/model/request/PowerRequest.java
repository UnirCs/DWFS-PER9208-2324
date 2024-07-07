package com.unir.calculatorapimongodb.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PowerRequest {
    private Double base;
    private Double exponent;
}
