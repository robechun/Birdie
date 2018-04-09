package io.hoth.birdie.Controllers;

import io.hoth.birdie.Entities.Yoyo;
import io.hoth.birdie.DAO.YourmomRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {
    private YourmomRepository yourmomRepository;

    public TestController(YourmomRepository yourmomRepository) {
        this.yourmomRepository = yourmomRepository;
    }

    @GetMapping("/all")
    public List<Yoyo> getAll() {
        List<Yoyo> yoyos = yourmomRepository.findAll();

        return yoyos;
    }

    @GetMapping("/yes")
    public String tester() {
        return "tester";
    }


}
