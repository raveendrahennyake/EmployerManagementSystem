package com.example.demo.controller;
import com.example.demo.DTO.Responce.EmployerResponce;
import com.example.demo.model.Employer;
import com.example.demo.service.EmloyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class EmloyerController {
    @Autowired
    private EmloyerService emloyerService;
    @GetMapping("/employers")
    public  List <Employer> getEmployers () {
        return emloyerService.getEmployers();
    }
    @GetMapping("/employer/{id}")
    public Optional<Employer> getEmployer(@PathVariable Integer id) {
        return emloyerService.getEmployer(id);
    }
    @PostMapping("/addEmployer")
    public ResponseEntity <Employer> addEmployer (@RequestBody EmployerResponce employerResponce) {

        return emloyerService.addEmployer(employerResponce);
    }
    @PutMapping("/UpdateEmployer/{id}")
    public ResponseEntity<String> updateEmployer(@PathVariable Integer id, @RequestBody Employer employer) {
        return emloyerService.updateEmployer(id, employer.getEmployerName(), employer.getPhoneNumber(), employer.getEmailAddress());
    }

    @DeleteMapping("/DelectEmployer/{id}")
    public ResponseEntity <String> delectEmployer (@PathVariable Integer id) {
        return  emloyerService.delectEmployer(id);

    }

}
