package com.example.demo.service;
import com.example.demo.DTO.Responce.EmployerResponce;
import com.example.demo.model.Employer;
import com.example.demo.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
import java.util.Optional;
@Service
public class EmloyerService {
    @Autowired
    private EmployerRepository employerRepository;
    public List<Employer> getEmployers() {
        return employerRepository.findAll();
    }
public Optional<Employer> getEmployer(@PathVariable Integer id) {
    return employerRepository.findById(id);
}
    public ResponseEntity<Employer> addEmployer(@RequestBody EmployerResponce employerResponce) {
        Employer employer = new Employer();
        employer.setEmployerName(employerResponce.getEmployerName());
        employer.setPhoneNumber(employerResponce.getPhoneNumber());
        employer.setEmailAddress(employerResponce.getEmailAddress());
        employerRepository.save(employer);
        return ResponseEntity.ok(employer);
    }
    public ResponseEntity <String> updateEmployer (Integer id, String newEmployerName, Integer newPhoneNumber, String newEmailAddress  ) {
        Optional<Employer> optionalEmployer = employerRepository.findById(id);
        if (optionalEmployer.isPresent()){
            Employer employer = optionalEmployer.get();
            employer.setEmployerId(id);
            employer.setPhoneNumber(newPhoneNumber);
            employer.setEmployerName(newEmployerName);
            employer.setEmailAddress(newEmailAddress);
            employerRepository.save(employer);
            return ResponseEntity.ok("It is correct ");
        }
        else {
            return ResponseEntity.notFound().build();
        }

    }

    public  ResponseEntity <String> delectEmployer (Integer id) {
         Optional <Employer> optionalEmployer=employerRepository.findById(id);
         if (optionalEmployer.isPresent()){
             employerRepository.deleteById(id);
             return ResponseEntity.ok("Employer is Delect");


         }else {
             return ResponseEntity.ok().build();
         }





    }



}




