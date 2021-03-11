
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    List<User> getAll();
    
    @Autowired
    User getById(String userId);
    
    @Autowired
    User create(User user);
    
    @Autowired
    User update(User user);
    
    @Autowired
    void remove(String userId);
}
