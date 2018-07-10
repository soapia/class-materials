phx_koders = ["Victoria","Delaney","Samantha","Maya","Natalia","Madison","Bayleigh","Ashlee","Emi","Amira","Braelyn","Kiley","Alex","Kaitlyn","Alyssa"].shuffle

# add your array of students here

# this makes the output pretty
def pretty(pop)
    pop.to_s.gsub('"','').gsub("[","").gsub("]","")
end

# this sorts into pairs
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

# this sorts into threes
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



# this sorts into fours
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

# call whatever you want here
student_trios(phx_koders)

