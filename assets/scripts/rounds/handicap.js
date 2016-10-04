```ruby
def differential (float 1 -> get rounded to the nearest 10th)
  (round.score - course.rating) * 113 / course.slope
end

```javascript may be best?
def diffs_used
  if count of rounds == 5 || 6
    return 1
  if count of rounds == 7 || 8
    return 2
  if count of rounds == 9 || 10
    return 3
  if count of rounds == 11 || 12
    return 4
  if count of rounds == 13 || 14
    return 5
  if count of rounds == 15 || 16
    return 6
  if count of rounds == 17
    return 7
  if count of rounds == 18
    return 8
  if count of rounds == 19
    return 9
  if count of rounds == 20
    return 10
end


```psql
// Getting the right data for the formula.
SELECT differential FROM rounds SORT BY date_played RETURN 20
--> Shovel into an array or table

SELECT differential FROM recent_rounds SORT BY differential RETURN diffs_used
--> Shovel into array?  Call array lowest_rounds



def handicap_index (float 1 -> truncated, not rounded)
  lowest_rounds.each(+=) / lowest_rounds.count * .96
end

def course_handicap
  handicap_index * (course.slope) / 113
end
