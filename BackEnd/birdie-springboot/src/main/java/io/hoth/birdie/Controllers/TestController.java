package io.hoth.birdie.Controllers;

import io.hoth.birdie.Entities.Test;
import io.hoth.birdie.DAO.TestRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {
    private TestRepository testRepository;

    public TestController(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @GetMapping("/all")
    public List<Test> getAll() {
        List<Test> tests = testRepository.findAll();

        return tests;
    }


}
