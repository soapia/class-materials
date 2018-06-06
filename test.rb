phx_koders = ["Victoria","Delaney","Samantha","Maya","Natalia","Madison","Bayleigh","Ashlee","Emi","Amira","Braelyn","Kiley","Alex","Kaitlyn","Alyssa"].shuffle

def pretty(pop)
    pop.to_s.gsub('"','').gsub("[","").gsub("]","")
end

def student_pairs(array)
    until array.empty? == true
        puts "#{pretty(array.pop(1))} and #{pretty(array.pop(1))}"
        unless array.count % 2 == 0
            if array.count == 3
                puts "#{pretty(array.pop(1))}, #{pretty(array.pop(1))}, and #{pretty(array.pop(1))}"
            end
        end
    end
end

def student_trios(array)
    until array.empty? == true
        puts "#{pretty(array.pop(1))}, #{pretty(array.pop(1))}, and #{pretty(array.pop(1))}"
        unless array.count % 3 == 0
            if array.count == 4
                puts "#{pretty(array.pop(1))}, #{pretty(array.pop(1))}, #{pretty(array.pop(1))}, and #{pretty(array.pop(1))}"
            end
        end
    end
end

# student_trios(phx_koders)

def student_fours(array)
    until array.empty? == true
        puts "#{pretty(array.pop(1))}, #{pretty(array.pop(1))}, #{pretty(array.pop(1))}, and #{pretty(array.pop(1))}"
        unless array.count % 4 == 0
            if array.count == 3
                puts "#{pretty(array.pop(1))}, #{pretty(array.pop(1))}, and #{pretty(array.pop(1))}"
            end
        end
    end
end

student_fours(phx_koders)

