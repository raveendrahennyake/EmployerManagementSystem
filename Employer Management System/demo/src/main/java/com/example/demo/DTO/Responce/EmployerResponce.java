package com.example.demo.DTO.Responce;
public class EmployerResponce {
    public EmployerResponce(String employerName, String emailAddress, Integer phoneNumber) {
        EmployerName = employerName;
        this.emailAddress = emailAddress;
        PhoneNumber = phoneNumber;
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
    private String EmployerName;
    private String emailAddress;
    private Integer PhoneNumber;
    public void setEmployerName(String employerName) {
        EmployerName = employerName;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        PhoneNumber = phoneNumber;
    }
}
