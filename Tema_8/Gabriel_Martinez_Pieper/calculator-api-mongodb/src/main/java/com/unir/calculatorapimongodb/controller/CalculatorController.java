package com.unir.calculatorapimongodb.controller;

import com.unir.calculatorapimongodb.model.*;
import com.unir.calculatorapimongodb.model.request.*;
import com.unir.calculatorapimongodb.service.CalculatorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
    @Operation(
            operationId = "Realizar una suma",
            description = "Operacion de escritura",
            summary = "Se realiza una suma de n numeros y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Numeros a sumar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionSubtractionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionSubtractionResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<AdditionSubtractionResult> add(@RequestBody AdditionSubtractionRequest request) {
        AdditionSubtractionResult addition = service.add(request);
        if (addition != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(addition);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/subtractions")
    @Operation(
            operationId = "Realizar una resta",
            description = "Operacion de escritura",
            summary = "Se realiza una resta de n numeros y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Numeros a sumar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionSubtractionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionSubtractionResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<AdditionSubtractionResult> subtract(@RequestBody AdditionSubtractionRequest request) {
        AdditionSubtractionResult subtraction = service.subtract(request);
        if (subtraction != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(subtraction);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/multiplications")
    @Operation(
            operationId = "Realizar una multiplicación",
            description = "Operacion de escritura",
            summary = "Se realiza una multiplicación de dos numeros y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Numeros a multiplicar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<MultiplicationResult> multiply(@RequestBody MultiplicationRequest request) {
        MultiplicationResult multiplication = service.multiply(request);
        if (multiplication != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(multiplication);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/divisions")
    @Operation(
            operationId = "Realizar una división",
            description = "Operacion de escritura",
            summary = "Se realiza una división y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Dividendo y divisor.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<DivisionResult> divide(@RequestBody DivisionRequest request) {
        DivisionResult division = service.divide(request);
        if (division != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(division);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/roots")
    @Operation(
            operationId = "Realizar una raiz",
            description = "Operacion de escritura",
            summary = "Se realiza una raiz y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "radicando e indice",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<RootResult> divide(@RequestBody RootRequest request) {
        RootResult root = service.root(request);
        if (root != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(root);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/powers")
    @Operation(
            operationId = "Realizar una potencia",
            description = "Operacion de escritura",
            summary = "Se realiza una potencia y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "base y exponente",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<PowerResult> power(@RequestBody PowerRequest request) {
        PowerResult power = service.power(request);
        if (power != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(power);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/operations")
    @Operation(
            operationId = "Obtener operaciones",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todos las operaciones almacenados en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", array=@ArraySchema(schema = @Schema(anyOf = {
                    AdditionSubtractionResult.class,
                    MultiplicationResult.class,
                    DivisionResult.class,
                    RootResult.class,
                    PowerResult.class }
            ))))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<List<Result>> getOperations(
            @Parameter(name = "type", description = "Tipo de operación", example = "addition", required = false)
            @RequestParam(required = false) String type
    ){
        return ResponseEntity.ok(service.getOperations(type));
    }

    @GetMapping("/operations/{id}")
    @Operation(
            operationId = "Obtener una operación",
            description = "Operacion de lectura",
            summary = "Se devuelve una operación a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(anyOf = {
                    AdditionSubtractionResult.class,
                    MultiplicationResult.class,
                    DivisionResult.class,
                    RootResult.class,
                    PowerResult.class })))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<Result> getOperation(@PathVariable String id){
        Result result = service.getOperation(id);
        if (result == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(result);
    }


}
