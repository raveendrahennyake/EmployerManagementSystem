package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name ="Employers")
@Entity
public class Employer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer EmployerId;
    private  String EmployerName;

    public Employer() {

    }

    public Integer getEmployerId() {
        return EmployerId;
    }

    public String getEmployerName() {
        return EmployerName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public Integer getPhoneNumber() {
        return PhoneNumber;
    }

    public void setEmployerId(Integer employerId) {
        EmployerId = employerId;
    }

    public void setEmployerName(String employerName) {
        EmployerName = employerName;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        PhoneNumber = phoneNumber;
    }

    private  String emailAddress;
    private Integer PhoneNumber;


    public Employer(Integer employerId, String employerName, String emailAddress, Integer phoneNumber) {
        EmployerId = employerId;
        EmployerName = employerName;
        this.emailAddress = emailAddress;
        PhoneNumber = phoneNumber;
    }
}
