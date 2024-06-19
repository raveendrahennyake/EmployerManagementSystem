package com.example.demo.DTO.Responce;
public class EmployerResponce {
    private String employer_name;
    public String getEmployer_name() {
        return employer_name;
    }
    public Integer getPhone_number() {
        return phone_number;
    }

    public String getEmail_address() {
        return email_address;
    }

    public void setEmployer_name(String employer_name) {
        this.employer_name = employer_name;
    }

    public void setPhone_number(Integer phone_number) {
        this.phone_number = phone_number;
    }

    public void setEmail_address(String email_address) {
        this.email_address = email_address;
    }

    private Integer phone_number;
    private String email_address;

}
