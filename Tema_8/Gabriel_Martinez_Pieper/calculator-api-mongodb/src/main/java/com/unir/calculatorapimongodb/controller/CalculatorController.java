package com.unir.calculatorapimongodb.controller;

import com.unir.calculatorapimongodb.model.*;
import com.unir.calculatorapimongodb.model.request.*;
import com.unir.calculatorapimongodb.service.CalculatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CalculatorController {

    private final CalculatorService service;

    @PostMapping("/additions")
    public ResponseEntity<AdditionSubtractionResult> add(@RequestBody AdditionSubtractionRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.add(request));
    }

    @PostMapping("/subtractions")
    public ResponseEntity<AdditionSubtractionResult> subtract(@RequestBody AdditionSubtractionRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.subtract(request));
    }

    @PostMapping("/multiplications")
    public ResponseEntity<MultiplicationResult> multiply(@RequestBody MultiplicationRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.multiply(request));
    }

    @PostMapping("/divisions")
    public ResponseEntity<DivisionResult> divide(@RequestBody DivisionRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.divide(request));
    }

    @PostMapping("/roots")
    public ResponseEntity<RootResult> divide(@RequestBody RootRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.root(request));
    }

    @PostMapping("/powers")
    public ResponseEntity<PowerResult> power(@RequestBody PowerRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.power(request));
    }

    @GetMapping("/operations")
    public ResponseEntity<List<Result>> getOperations(@RequestParam(required = false) String type){
        return ResponseEntity.ok(service.getOperations(type));
    }

    @GetMapping("/operations/{id}")
    public ResponseEntity<Result> getOperation(@PathVariable String id){
        Result result = service.getOperation(id);
        if (result == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(result);
    }


}
