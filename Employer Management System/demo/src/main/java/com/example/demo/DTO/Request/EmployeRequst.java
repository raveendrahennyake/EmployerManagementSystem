package com.example.demo.DTO.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeRequst {
    private String EmployerName;
    private String emailAddress;
    private Integer PhoneNumber;
}
